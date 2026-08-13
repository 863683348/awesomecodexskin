// src/lib/browse-client.ts
// Framework-free client logic for filtering / sorting / paginating skin grids.
// Shared by the homepage, /skins, and /skins/category/[slug].

type BrowseOpts = {
  grid: string;
  resultCount?: string;
  empty?: string;
  loadMore?: string;
  sort?: string;
  search?: string;
  facetCategory?: string;
  facetMood?: string;
  facetPlatform?: string;
  facetColor?: string;
  lockCategory?: string;
  pageSize?: number;
  sortDefault?: 'featured' | 'newest' | 'popular';
};

function hexToRgb(hex: string): [number, number, number] | null {
  let h = hex.replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (h.length !== 6) return null;
  const n = parseInt(h, 16);
  if (Number.isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function colorDistance(a: string, b: string): number {
  const ra = hexToRgb(a);
  const rb = hexToRgb(b);
  if (!ra || !rb) return Infinity;
  return Math.sqrt(
    (ra[0] - rb[0]) ** 2 + (ra[1] - rb[1]) ** 2 + (ra[2] - rb[2]) ** 2
  );
}

export function initBrowse(opts: BrowseOpts): void {
  const grid = document.querySelector<HTMLElement>(opts.grid);
  if (!grid) return;
  const resultCountEl = opts.resultCount
    ? document.querySelector<HTMLElement>(opts.resultCount)
    : null;
  const emptyEl = opts.empty ? document.querySelector<HTMLElement>(opts.empty) : null;
  const loadMoreBtn = opts.loadMore
    ? document.querySelector<HTMLButtonElement>(opts.loadMore)
    : null;
  const sortEl = opts.sort
    ? document.querySelector<HTMLSelectElement>(opts.sort)
    : null;
  const searchEl = opts.search
    ? document.querySelector<HTMLInputElement>(opts.search)
    : null;
  const moodEl = opts.facetMood
    ? document.querySelector<HTMLInputElement>(opts.facetMood)
    : null;
  const colorEl = opts.facetColor
    ? document.querySelector<HTMLInputElement>(opts.facetColor)
    : null;

  const pageSize = opts.pageSize ?? 24;
  let visibleCount = pageSize;

  const cards = Array.from(grid.querySelectorAll<HTMLElement>('.skin-card'));

  function getChecked(name: string): string[] {
    return Array.from(
      document.querySelectorAll<HTMLInputElement>(`[data-facet="${name}"]:checked`)
    ).map((el) => el.value);
  }

  function apply(): void {
    const categories = opts.lockCategory ? [] : getChecked('category');
    const platforms = getChecked('platform');
    const mood = (moodEl?.value ?? '').trim().toLowerCase();
    const color = colorEl?.value ?? '';
    const query = (searchEl?.value ?? '').trim().toLowerCase();
    const sort = (sortEl?.value ?? opts.sortDefault ?? 'featured') as
      | 'featured'
      | 'newest'
      | 'popular';

    const matched = cards.filter((card) => {
      const cat = card.dataset.category ?? '';
      const plat = card.dataset.platform ?? '';
      const m = (card.dataset.mood ?? '').toLowerCase();
      const name = (card.dataset.name ?? '').toLowerCase();
      const author = (card.dataset.author ?? '').toLowerCase();
      const skinColor = card.dataset.color ?? '';

      // category (OR within group; skip when locked)
      if (categories.length && !categories.includes(cat)) return false;
      // platform (OR; 'both' matches any selection)
      if (platforms.length) {
        const ok =
          platforms.includes(plat) || (plat === 'both' && platforms.length > 0);
        if (!ok) return false;
      }
      // mood substring
      if (mood && !m.includes(mood)) return false;
      // color proximity
      if (color && skinColor && colorDistance(skinColor, color) > 80) return false;
      // free search (name / mood / category label / author)
      if (query) {
        const hay = `${name} ${m} ${cat} ${author}`;
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    // sort
    matched.sort((a, b) => {
      if (sort === 'newest') {
        return (b.dataset.updated ?? '').localeCompare(a.dataset.updated ?? '');
      }
      if (sort === 'popular') {
        return Number(b.dataset.installs ?? 0) - Number(a.dataset.installs ?? 0);
      }
      // featured: keep DOM order (server already featured-first on home)
      return 0;
    });

    // hide all, then show matched up to visibleCount in sorted order
    cards.forEach((c) => (c.style.display = 'none'));
    const shown = matched.slice(0, visibleCount);
    shown.forEach((c) => grid.appendChild(c)); // re-append in sorted order
    shown.forEach((c) => (c.style.display = ''));

    // result count
    if (resultCountEl) {
      resultCountEl.textContent = String(matched.length);
    }
    // empty state
    if (emptyEl) {
      emptyEl.style.display = matched.length ? 'none' : '';
    }
    grid.style.display = matched.length ? '' : 'none';
    // load more
    if (loadMoreBtn) {
      loadMoreBtn.style.display = matched.length > visibleCount ? '' : 'none';
    }
  }

  function bump(): void {
    visibleCount += pageSize;
    apply();
  }

  // wire events
  document
    .querySelectorAll<HTMLInputElement>('[data-facet]')
    .forEach((el) => el.addEventListener('change', apply));
  moodEl?.addEventListener('input', apply);
  searchEl?.addEventListener('input', apply);
  colorEl?.addEventListener('input', apply);
  sortEl?.addEventListener('change', apply);
  loadMoreBtn?.addEventListener('click', bump);

  apply();
}

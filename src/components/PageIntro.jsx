const PageIntro = () => {
  return (
    <div className="page-intro">
      <p>
        <strong>ScrubShop</strong> is a practice project I built to sharpen core
        React skills ahead of a frontend interview, modeled on the kind of
        product-catalog experience you'd find on a real medical scrubs and
        uniforms retailer. It features live debounced search, multi-attribute
        filtering (category, color, gender), sortable results, "Load More"
        pagination, and a fully functional shopping cart with quantity controls
        — all built from scratch across a focused week of practice, with an
        emphasis on clean state management, accessibility, and responsive
        design.
      </p>
      <p className="tech-stack">
        Built with React (hooks, useMemo, controlled components), SCSS, and
        localStorage persistence.
      </p>
    </div>
  );
};

export default PageIntro;

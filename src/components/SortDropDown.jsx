const SortDropDown = ({ id, label, value, onChange }) => {
  return (
    <div className="drop-down">
      <label htmlFor={id}>{label}: </label>

      <select id={id} value={value} onChange={onChange}>
        <option value="none">Sort by...</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
      </select>
    </div>
  );
};

export default SortDropDown;

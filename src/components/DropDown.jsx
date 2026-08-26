const DropDown = ({ id, label, options, value, onChange }) => {
  return (
    <div className="drop-down">
      <label htmlFor={id}>{label}: </label>

      <select id={id} value={value} onChange={onChange}>
        <option value="all">All</option>
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default DropDown;

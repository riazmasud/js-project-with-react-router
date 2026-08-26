const SearchInput = ({ searchTerm, handleChange }) => {
  return (
    <div className="search">
      <label htmlFor="searchTerm">Search:</label>
      <input
        type="text"
        id="searchTerm"
        name="searchTerm"
        placeholder="Enter your search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;

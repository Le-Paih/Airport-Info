function SearchBar({ handleSearch, searchQuery }) {
  return (
    <div className="my-4 mt-8 flex justify-center">
      <input
        type="text"
        placeholder="Search for an airport..."
        value={searchQuery}
        onChange={handleSearch}
        className="dark:focus:ring-dPurple dark:bg-overlay w-3/5 justify-center rounded-lg bg-neutral-100 px-2 py-2 text-base capitalize transition-all duration-300 placeholder:lowercase focus:outline-none focus:ring focus:ring-blue-600 focus:ring-opacity-65 dark:text-white"
      />
    </div>
  );
}

export default SearchBar;

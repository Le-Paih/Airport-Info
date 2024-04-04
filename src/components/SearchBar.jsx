function SearchBar({ handleSearch, searchQuery }) {
  return (
    <div className="my-4 mt-8 flex justify-center">
      <input
        type="text"
        placeholder="Search for an airport..."
        value={searchQuery}
        onChange={handleSearch}
        className="mx-2 w-full justify-center rounded-lg bg-neutral-100 px-2 py-2 text-base capitalize transition-all duration-300 placeholder:lowercase focus:outline-none focus:ring focus:ring-blue-600 focus:ring-opacity-65 dark:bg-overlay dark:text-white dark:focus:ring-dPurple sm:mx-8 md:mx-0 md:w-3/5"
      />
    </div>
  );
}

export default SearchBar;

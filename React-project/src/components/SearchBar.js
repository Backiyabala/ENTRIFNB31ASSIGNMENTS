
const SearchBar=({ searchTerm, setSearchTerm })=> {
  return (
    <div className="sm:w-full lg:w-1/3 md:w-1/2">
      <div
        className="flex items-center gap-3
                   rounded-xl border border-orange-200
                   bg-white px-4 py-3 shadow-sm
                   transition duration-300
                   focus-within:border-orange-500
                   focus-within:ring-2
                   focus-within:ring-orange-200
                   hover:shadow-md"
      >
        {/* Search Icon */}
        <span className="text-xl text-orange-500">
          🔍
        </span>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full min-w-0 bg-transparent
                     text-sm sm:text-base text-gray-700
                     placeholder:text-gray-400
                     outline-none"
          aria-label="Search products"
        />

        {/* Clear Search */}
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="shrink-0 rounded-full px-2 py-1
                       text-lg font-bold text-gray-400
                       transition hover:bg-orange-100
                       hover:text-orange-600"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

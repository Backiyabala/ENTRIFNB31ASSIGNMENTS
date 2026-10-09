
const FilterSort=({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  resetFilters
}) =>{
  return (
    <div className="w-1/2 rounded-xl border border-orange-100
                 bg-white p-2 sm:p-5 shadow-md">

      {/* Filters */}
      <div className="flex flex-col gap-4
                      sm:flex-row sm:items-end">

        {/* Category Filter */}
        <div >

          <select
            id="category"
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
            className=" rounded-lg
                       border border-orange-200 bg-orange-50
                       px-1 py-3 text-sm text-gray-700
                       outline-none transition duration-300
                       focus:border-orange-500
                       focus:ring-2 focus:ring-orange-200"
          >
            <option value="all">All Categories</option>
            <option value="veg">Veg</option>
            <option value="Non-veg">Non-veg</option>
            <option value="sweet">Sweets</option>
            <option value="Fresh Juice">Fresh Juices</option>
          </select>
        </div>

        {/* Sort Options */}
        <div>

          <select
            id="sort"
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value)
            }
            className="rounded-lg w-20
                       border border-orange-200 bg-orange-50
                       py-2 text-sm text-gray-700
                       outline-none transition duration-300
                       focus:border-orange-500
                       focus:ring-2 focus:ring-orange-200"
          >
            <option value="default">Sort By</option>
            <option value="priceLow">
              Price: Low to High
            </option>
            <option value="priceHigh">
              Price: High to Low
            </option>
            <option value="nameAZ">Name: A-Z</option>
            <option value="nameZA">Name: Z-A</option>
          </select>
        </div>

        {/* Reset Button */}
        <button
          type="button"
          onClick={resetFilters}
          className="flex w-full items-center justify-center
                     gap-2 rounded-lg bg-orange-500
                     p-2 text-sm font-semibold
                     text-white shadow-sm
                     transition duration-300
                     hover:bg-orange-600 hover:shadow-md
                     active:scale-95
                     sm:w-auto"
        >
          Reset
        </button>

      </div>
    </div>
  );
}

export default FilterSort;

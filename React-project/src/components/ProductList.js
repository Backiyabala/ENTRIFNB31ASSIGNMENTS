
import ProductCard from "./ProductCard";

const ProductList=({ products, onAddToCart }) =>{
  return (
    <section className="w-screen p-8 sm:py-10 ">

      {/* Section Heading */}
      <div className="mb-6 flex flex-col gap-4
                      sm:mb-8 sm:flex-row
                      sm:items-center sm:justify-between">

        <div>
          <h2 className="text-2xl sm:text-3xl
                         font-extrabold text-gray-800">
            Our <span className="text-orange-500">
              Products
            </span>
          </h2>

          <p className="mt-2 text-sm sm:text-base
                        text-gray-500">
            Discover products you'll love.
          </p>
        </div>

        {/* Product Count */}
        <span className="w-fit rounded-full
                         bg-orange-100 px-4 py-2
                         text-sm font-semibold
                         text-orange-700">
          {products.length} Products
        </span>
      </div>

      {/* Empty State */}
      {products.length === 0 ? (
        <div className="flex min-h-64 flex-col
                        items-center justify-center
                        rounded-2xl border-2
                        border-dashed border-orange-200
                        bg-orange-50 px-4 py-10
                        text-center">

          <span className="mb-4 text-5xl">🔍</span>

          <h3 className="text-xl font-bold text-gray-800">
            No products found 😔
          </h3>

          <p className="mt-2 max-w-sm text-sm
                        text-gray-500">
            Try changing your search or filter
            to discover more products.
          </p>
        </div>
      ) : (

        /* Responsive Product Grid */
        <div className="grid grid-cols-1 gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}

        </div>
      )}

    </section>
  );
}

export default ProductList;

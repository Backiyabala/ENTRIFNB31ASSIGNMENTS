
const ProductCard=({ product, onAddToCart })=> {
  return (
    <div
      className="group flex h-full flex-col overflow-hidden
                 rounded-xl border-2 border-orange-400
                 bg-white shadow-md
                 transition duration-300
                 hover:-translate hover:shadow-xl
                 hover:border-orange-300"
    >
      {/* Product Image */}
      <div className="h-48 sm:h-52 overflow-hidden bg-orange-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover
                     transition duration-500
                     group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">

        {/* Category Badge */}
        <span
          className="mb-3 w-fit rounded-full
                     bg-orange-100 px-3 py-1
                     text-xs font-semibold
                     text-orange-700"
        >
          {product.category}
        </span>

        {/* Product Name */}
        <h3
          className="mb-2 line-clamp-1 text-lg
                     font-bold text-gray-800
                     transition-colors
                     group-hover:text-orange-600"
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="mb-4 line-clamp-2 min-h-10
                      text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="mt-auto flex flex-col gap-3
                        border-t border-orange-100
                        pt-4 sm:flex-row
                        sm:items-center sm:justify-between">

          <strong className="text-xl font-extrabold
                             text-orange-600">
            ${product.price.toFixed(2)}
          </strong>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex w-full items-center
                       justify-center gap-2
                       rounded-lg bg-orange-500
                       px-4 py-2.5 text-sm
                       font-semibold text-white
                       shadow-sm transition duration-300
                       hover:bg-orange-600 hover:shadow-md
                       active:scale-95
                       sm:w-auto"
          >
            <span>🛒</span>
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;

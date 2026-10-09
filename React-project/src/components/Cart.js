
const Cart = ({ cart, onRemove, onClose }) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div
      className="fixed right-2 top-[76px] z-50
                 max-h-[calc(100vh-90px)] w-[calc(100%-16px)]
                 max-w-md overflow-y-auto
                 rounded-2xl border border-orange-200
                 bg-white p-4 shadow-2xl
                 sm:right-6 sm:top-24 sm:w-[400px] sm:p-5"
      role="dialog"
      aria-label="Shopping cart"
    >
      {/* Cart Heading */}
      <div className="mb-5 flex items-center
                      justify-between gap-3">
        <h2 className="flex items-center gap-2
                       text-lg font-bold text-orange-600
                       sm:text-xl">
          🛒 Shopping Cart
          <span className="rounded-full bg-orange-100
                           px-2 py-1 text-xs text-orange-700">
            {cart.length}
          </span>
        </h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close cart"
          className="rounded-lg px-2 border
                     text-2xl text-red-600
                     hover:bg-orange-600"
        >
          x
        </button>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center
                        rounded-xl bg-orange-50
                        px-4 py-8 text-center">

          <h3 className="font-semibold text-gray-700">
            Your cart is empty
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Add some products to get started!
          </p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-3">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center
                           justify-between gap-3
                           rounded-xl border border-orange-100
                           bg-orange-50/50 p-3"
              >
                <div className="min-w-0">
                  <h4 className="break-words font-semibold
                                 text-gray-800">
                    {item.name}
                  </h4>

                  <p className="mt-1 font-bold text-orange-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="shrink-0 rounded-lg
                             bg-red-100 px-3 py-2
                             text-sm font-semibold text-red-600
                             transition hover:bg-red-600
                             hover:text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-4 flex items-center
                          justify-between gap-3
                          rounded-xl bg-orange-500
                          p-4 text-white">
            <span className="font-semibold">
              Total Amount
            </span>

            <span className="text-xl font-extrabold">
              ${total.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

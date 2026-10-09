
const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full
                    border-b border-orange-100
                    bg-orange-700 shadow-md">

      <div className="mx-auto flex h-28  max-w-7xl
                      items-center justify-between px-4
                      p-3">

        {/* Logo */}
        <div className="flex-1 items-center gap-2">
          {/* <span className="text-3xl">🛍️</span>
          <h1 className="text-xl font-extrabold
                         text-orange-600 sm:text-2xl">
            ShopEasy
          </h1> */}
          <img
            className="rounded-full"
            src="https://img.freepik.com/premium-photo/restaurant-logo-dark-background_1036468-821.jpg"
            alt="_logo" height={80} width={100} />
        </div>

        {/* Cart Icon */}
        <button
          type="button"
          onClick={onCartClick}
          aria-label={`Open cart, ${cartCount} items`}
          className="relative flex items-center gap-2
                     rounded-full bg-orange-50
                     px-4 py-2 font-semibold
                     shadow-sm transition hover:bg-orange-600
                     active:scale-95"
        >
          <span className="text-xl">🥄Cart</span>

          <span className="flex h-6 min-w-6
                           items-center justify-center
                           rounded-full bg-white px-1
                           text-xs font-bold text-orange-600">
            {cartCount}
          </span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;

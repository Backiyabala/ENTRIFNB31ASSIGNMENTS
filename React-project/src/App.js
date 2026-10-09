import { useState } from "react";


import productsData from "./data/Products";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";


function App() {
   
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products] = useState(productsData);

  const [cart, setCart] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [sortOrder, setSortOrder] =
    useState("default");


  // Add product to cart
  const handleAddToCart = (product) => {
    setCart((previousCart) => [
      ...previousCart,
      product
    ]);
  };


  // Remove product from cart
  const handleRemoveFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };


  // Reset search, category and sorting
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOrder("default");
  };


  // Search and filter products
  let filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });


  // Sort products
  filteredProducts = [...filteredProducts].sort(
    (a, b) => {

      switch (sortOrder) {

        case "priceLow":
          return a.price - b.price;

        case "priceHigh":
          return b.price - a.price;

        case "nameAZ":
          return a.name.localeCompare(b.name);

        case "nameZA":
          return b.name.localeCompare(a.name);

        default:
          return 0;
      }
    }
  );


  return (
    <div className="bg-orange-200">

      <Navbar
        cartCount={cart.length}
        onCartClick={() => setIsCartOpen((open) => !open)}
      />

      <main className="container">


        <div className="m-4 lg:flex fex-row justify-between
        ">

        <FilterSort
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          resetFilters={resetFilters}
          />
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />

        {/* Cart Backdrop */}
        {isCartOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsCartOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Top-Right Cart Panel */}
        {isCartOpen && (
          <Cart
            cart={cart}
            onRemove={handleRemoveFromCart}
            onClose={() => setIsCartOpen(false)}
          />
        )}


      </main>

    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-gray-900 text-white min-h-screen p-6">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to b-eay 🖥️</h1>
                <p className="text-gray-400">Buy and sell PC parts easily.</p>
              </div>
            }
          />

          {/* Products Route */}
          <Route
            path="/products"
            element={
              <div>
                <h1 className="text-3xl font-bold mb-6">PC Accessories</h1>
                <ProductList products={products} />
              </div>
            }
          />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Signup Route */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

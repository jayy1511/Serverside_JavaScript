import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from './pages/Profile';
import AddProduct from './pages/AddProduct';
import ManageProducts from './pages/ManageProducts';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-zinc-950">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/manage-products" element={<ManageProducts />} />
            <Route path="/products" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

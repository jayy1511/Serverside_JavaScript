import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">b-eay</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>

        {!token ? (
          <Link to="/login" className="hover:underline">Sign In</Link>
        ) : (
          <>
            <Link to="/add-product" className="hover:underline">Add Product</Link>
            <Link to="/manage-products" className="hover:underline">Manage Products</Link>
            <Link to="/profile" className="hover:underline">
              {user?.firstName || "Profile"}
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded ml-2"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

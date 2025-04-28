import { Link, useNavigate } from "react-router-dom";
import Button2 from "../layouts/Button2"; // ✅ Import Button

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
    <nav className="bg-[#888888] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">b-eay</h1>
      <div className="flex items-center gap-4">
        <Link to="/" className="transition-all hover:text-[#3d3d3d] cursor-pointer">
          Home
        </Link>

        {!token ? (
          <div className="scale-90">
            <Button2 title="Sign In" link="login" />
          </div>
        ) : (
          <>
            <Link to="/add-product" className="transition-all hover:text-[#3d3d3d] cursor-pointer">
              Add Product
            </Link>
            <Link to="/manage-products" className="transition-all hover:text-[#3d3d3d] cursor-pointer">
              Manage Products
            </Link>
            <Link to="/profile" className="transition-all hover:text-[#3d3d3d] cursor-pointer">
              {user?.firstName || "Profile"}
            </Link>
            <div className="scale-90">
              <Button2 title="Logout" onClick={handleLogout} />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

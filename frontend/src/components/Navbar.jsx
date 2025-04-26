import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-500">
          b-eay 🖥️
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link
            to="/products"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

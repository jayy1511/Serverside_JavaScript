import { useEffect, useState } from "react";
import Button from "../layouts/Button";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://serverside-javascript-11.onrender.com/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = async (id) => {
    const newName = prompt("Enter new product name:");
    const newPrice = prompt("Enter new product price:");
    const newDescription = prompt("Enter new description:");

    if (!newName || !newPrice || !newDescription) {
      alert("Please fill all fields.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in first!");
      return;
    }

    try {
      const res = await fetch(`https://serverside-javascript-11.onrender.com/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: newName,
          price: parseFloat(newPrice),
          description: newDescription,
        }),
      });

      if (res.ok) {
        alert("Product updated successfully!");
        fetchProducts();
      } else {
        const data = await res.json();
        alert(data.message || "Failed to update product.");
      }
    } catch (error) {
      console.error("Edit error:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in first!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert("Product deleted successfully!");
        fetchProducts();
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete product.");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Manage Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-[#4F4F4F] text-white rounded-lg p-5 shadow-md">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-40 w-full object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-400 mb-2">${product.price}</p>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <div className="flex gap-4">
              <Button title="Edit" onClick={() => handleEdit(product._id)} />
              <Button title="Delete" onClick={() => handleDelete(product._id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;

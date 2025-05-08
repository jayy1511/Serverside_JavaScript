import { useState } from "react";
import Button from "../layouts/Button";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://serverside-javascript-13.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, price, description, image }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Product added successfully!");
        setName("");
        setPrice("");
        setDescription("");
        setImage("");
      } else {
        alert(data.message || "Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000000] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          className="w-full p-2 rounded bg-[#4F4F4F]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 rounded bg-[#4F4F4F]"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 rounded bg-[#4F4F4F]"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 rounded bg-[#4F4F4F]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
       <div className="flex justify-center items-center">
  <Button title="Add Product" />
</div>

      </form>
    </div>
  );
}

export default AddProduct;

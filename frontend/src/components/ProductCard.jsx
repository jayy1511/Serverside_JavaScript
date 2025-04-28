import Button from "../layouts/Button";

function ProductCard({ product }) {
  return (
    <div className="bg-[#4F4F4F] text-white rounded-lg p-5 shadow-md">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-400 mb-2">{product.description}</p>
      <p className="text-gray-400 mb-3">${product.price}</p>
      <Button title="Add to Cart" />
    </div>
  );
}

export default ProductCard;

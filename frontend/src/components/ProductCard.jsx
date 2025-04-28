function ProductCard({ product }) {
    return (
      <div className="bg-gray-800 text-white rounded-lg p-5 shadow-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-400 mb-2">{product.description}</p>
        <p className="text-gray-400 mb-3">${product.price}</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default ProductCard;
  
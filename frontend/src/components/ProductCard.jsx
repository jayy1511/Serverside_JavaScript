const ProductCard = ({ name, description, price }) => {
    return (
      <article className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="font-bold text-lg">${price}</p>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </article>
    )
  }
  
  export default ProductCard
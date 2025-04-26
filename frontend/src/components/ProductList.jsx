function ProductList({ products }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product._id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold text-green-600">${product.price}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    )
  }
  
  export default ProductList
  
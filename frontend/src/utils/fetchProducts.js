export async function fetchProducts() {
    try {
      const res = await fetch("http://localhost:3000/api/products")
      return await res.json()
    } catch (err) {
      console.error("Failed to fetch products:", err)
      return []
    }
  }
  
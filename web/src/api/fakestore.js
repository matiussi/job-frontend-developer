export async function getAllProducts() {
   try {
      let response = await fetch('https://fakestoreapi.com/products')
      let data = await response.json()
      return data
   } catch (error) {
      console.log(error)
   }
}
export async function getCategories() {
   try {
      let response = await fetch('https://fakestoreapi.com/products/categories')
      let data = await response.json()
      return data
   } catch (error) {
      console.log(error)
   }
}
export async function getProductsByCategory(category) {
   try {
      let response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
      let data = await response.json()
      return data
   } catch (error) {
      console.log(error)
   }
}

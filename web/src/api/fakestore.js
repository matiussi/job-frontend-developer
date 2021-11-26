export async function getAllProducts() {
   try {
      let response = await fetch('https://fakestoreapi.com/products')
      let data = await response.json()
      return data
   } catch (error) {
      console.log(error)
   }
}
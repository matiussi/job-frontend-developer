export async function getAllProducts() {
   try {
      let response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw response.statusText;

      return response.json();

   } catch (error) {
      console.log(error);
   }
}
export async function getCategories() {
   try {
      let response = await fetch('https://fakestoreapi.com/products/categories');
      if (!response.ok) throw response.statusText;
      return response.json();
   } catch (error) {
      console.log(error);
   }
}
export async function getProductsByCategory(category) {
   try {
      let response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      if (!response.ok) throw response.statusText;
      return response.json();
   } catch (error) {
      console.log(error);
   }
}

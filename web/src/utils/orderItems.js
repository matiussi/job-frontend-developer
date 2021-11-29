export default function orderItems(items, value){
   const values = value.split(",");
   const property = values[0];
   const type = values[1];

   items.sort((a, b) => {
      if (property == "title" ) {
         return a[property].localeCompare(b[property]);
      }
      if(property == "price"){
         return a[property] - b[property];
      }
      if(property == "rating"){
         return a[property].rate - b[property].rate;
      }
   });
   if(type == 'desc'){
      items.sort().reverse();
   }
   return items;
}
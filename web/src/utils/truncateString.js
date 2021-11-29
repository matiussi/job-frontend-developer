export default function truncateString(str) {
   if (str.length > 40) {
      return str.slice(0, 30) + "...";
   } else {
      return str;
   }
}
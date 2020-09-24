 const formatFee = (fee) => {
  return fee < 0 ? `-$${(Math.abs(fee) / 100).toFixed(2)}` : `$${(fee / 100).toFixed(2)}`;
 };

 const formatString = (string) => {
  return string ? string[0].toUpperCase() + string.substring(1).toLowerCase() : '';
 }

 export { formatFee, formatString }

 function arrayToCSV(objArray) {
  const array =
   typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
  let str =
   `${Object.keys(array[0])
        .map((value) => `"${value}"`)
        .join(",")}` + "\r\n";

  return array.reduce((str, next) => {
   str +=
    `${Object.keys(next)
          .map((value) => `"${value.includes("amount") ? formatFee(next[value]) : next[value]}"`)
          .join(",")}` + "\r\n";
   return str;
  }, str);
 }

 export { arrayToCSV }
 
 const formatFee = (fee) => {
  return fee < 0 ? `-$${(Math.abs(fee) / 100).toFixed(2)}` : `$${(fee / 100).toFixed(2)}`;
 };

 const formatString = (string) => {
  return string ? string[0].toUpperCase() + string.substring(1).toLowerCase() : '';
 }

 const formatPhone = string => {
  const numbers = string.replace(/\D/g, '')
  let result;
  if (numbers.length === 7) {
   result = `${numbers.substring(0, 3)}-${numbers.substring(3)}`
  }
  else if (numbers.length === 10) {
   result = `(${numbers.substring(0, 3)})${numbers.substring(3, 6)}-${numbers.substring(6)}`
  }
  else if (numbers.length === 11) {
   result = `+${numbers.substring(0,1)}(${numbers.substring(1, 4)})${numbers.substring(4, 7)}-${numbers.substring(7)}`
  }

  return result;
 }

 export { formatFee, formatString, formatPhone }

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
 
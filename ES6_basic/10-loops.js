export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(appendString + element);
  });
  return newArray;
}

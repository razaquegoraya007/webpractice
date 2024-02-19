// code practice

console.log("Class Practice")
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function doubleArrayValues(arr,input) {
    return arr.map(value => value * input);
}
const doubledArray = doubleArrayValues(originalArray,3);
console.log(doubledArray);

const even = originalArray.filter(number => {
    // return number % 2 === 0;
    return number % 3;
  });

console.log(even)

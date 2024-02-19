// Task 1
console.log("First Task")
function reverseArray(aray){
    console.log(aray.reverse())
}
reverseArray([1,2,3])

// task 2
console.log("Second Task")
let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
};
function carInfo(car) {
    return `The ${car.brand} ${car.model} was manufactured in ${car.year}.`;
}
console.log(carInfo(car));

// task 3
console.log("Third Task")
function applyFunction(array, func) {
    return array.map(func);
}
let numbers = [1, 2, 3];
let result = applyFunction(numbers, (x) => x * 2);

console.log(result);







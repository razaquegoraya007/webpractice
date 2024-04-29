function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4));



const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr, ...arr2];
console.log(mergedArray);

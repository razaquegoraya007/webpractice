// Backticks (template Literals)

// const count = 12;
// const heading = `This is heading and the value of the variable is ${count}`;
// console.log(heading);

// document.write(heading);

// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// var headobj = `The Object is ${person}`;
// console.log(headobj)

// document.write(headobj);
// JSON Objects practice it will be in paper
// const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// console.log(obj)

// const arr ={firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// for (num of arr){
//     if (arr[num]){
//         arr[num] = arr[num]+1;
//     }else{
//         arr[num] = 1;
//     }
//     console.log(num)
// }

// const obje1 ={Name:"Zain", age:300, countrycode:"+92", gender:"Male/Female"};
// console.log(obje1)

// const objec2 = obje1;
// objec2.age = 100
// console.log(obje1)
// console.log(objec2)


// clone of the object
// const objec3 = {...obje1} //spread operator
// objec3.age = 250;
// console.log(objec3)

// const arr1 = [2,23,3,4,2]

// const arr2 = arr1
// arr2[1] = 20
// console.log(arr1)
// console.log(arr2)

// const arr3 = [...arr2]
// arr3[1] = 10
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// const obje1 ={Name:"Zain", age:300, countrycode:"+92", gender:"Male/Female"};
// const{Name,age,...rest} = obje1;
// console.log(obje1)

// function myFunction (){
//     console.log("This is default parameter")
// }

// function getData() {
//     return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    // setTimeout(() => {
    // const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    // resolve(data);
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    // reject(data);
    // }, 2000); // Simulating a delay of 2 seconds
    // });
    // }
    // Consuming the Promise
    // console.log(getData)
    // getData().then(data => {
    //     console.log('Data received:', data);
    // })
    // .catch(error => {
    //     console.error('Error:', error.message);
    // });


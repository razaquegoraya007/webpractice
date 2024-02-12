// console.log("Hello this is me Javascript")
let myobject = {
    name:"Abdul",
    cms:'021-21-0081',
    address:{studname:"Ahsan",city:"sukkur"}
};
// console.log(myobject['name'])
// console.log(Object.keys(myobject))
let keyss = Object.keys(myobject)
// console.log(myobject[keyss[1]])

for (let key in myobject){
    console.log(myobject[key])
    if(Object.keys(myobject[key].length>0)){
        for(let key2 in myobject[key]){
            console.log(myobject[key][key2])
        }
    }
}
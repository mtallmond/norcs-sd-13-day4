/*
//our previous version of forEach
function forEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i])
    }
}
*/

//Exercise 3 define forEach function to use the array it is invoked on, instead of passing array as an arguement
function forEach(callback){
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        callback(element)
    }
}
//Exercise 4: following instructions in canvas allow arrays to use your function
Array.prototype.forEach = forEach
let numbers = [1,2,3]
numbers.forEach(function(e){
    console.log("iteration:", e)
})
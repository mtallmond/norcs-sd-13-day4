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
    
}
//Exercise 4: following instructions in canvas allow arrays to use your function

let numbers = [1,2,3]
numbers.forEach(function(e){
    console.log("iteration:", e)
})

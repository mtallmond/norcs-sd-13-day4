//Don't edit this file it is to help you understand if your code is complete

//Exercise 3
//does the student's forEach have a for keyword, this.length, this[, and callback(?
let fString = forEach.toString()
let test3Span = document.querySelector("#test-3")
if(fString.includes("for") && fString.includes("this.length") && fString.includes("this[") && fString.includes("callback(")){
    test3Span.textContent = "Test passes!"
}
else {
    test3Span.textContent = "Test fails: forEach should have a for loop, use this to access array and invoke the callback function"
}
//Exercise 4
//Look at array prototypes definition is it native code or theirs?
let prototypeString = Array.prototype.forEach.toString()
let test4Span = document.querySelector("#test-4")
if(!prototypeString.includes("native code") && prototypeString.includes(fString)){
    test4Span.textContent = "Test passes!"
}
else {
    test4Span.textContent = "Test fails: make sure to read instructions in canvas activity, you should set the Array.prototype.forEach to the function you defined, so all arrays can use it"
}

//Exercise 5

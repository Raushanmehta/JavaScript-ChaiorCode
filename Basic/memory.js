// stack(primitive)copy value return and Heap(Non-Primitive)reference means change on original value the return of change value memory

let myCollageName ="Silver Oak University"
let anotherName = myCollageName
anotherName = "Aditya Silver Oak University"
// console.log(myCollageName);
// console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ylb"
}

let userTwo = userOne
userOne.email="raushan@goole.com"

console.log(userOne);
console.log(userTwo);
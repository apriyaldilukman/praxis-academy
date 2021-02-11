// function function_name() {
//     // function body//
// }

// // define a function//
// function test(){
//     console.log("function called")
// }

// //call the function
// test()

// function retStr(){
//     return "hello word"
// }
// var val = retStr()
// console.log(val)

// // Parameterized function//
// function add (n1,n2) {
//     var sum = n1 + n2
//     console.log("The sum of the values entered "+sum)
// }
// add(12,13)

// // Default function parameters//
// function add(a, b = 1) {
//     return a+b;
// }
// console.log(add(4))

// // parameters//
// function add(a, b = 1) {
//     return a + b;
// }
// console.log(add(4,2))

// // example 1 function script//
// function addTwoNumbers(first,second = 10) {
//     console.log('first parameter is :',first)
//     console.log('second parameter is :',second)
//     return first+second;
// }
// console.log("case 1 sum:",addTwoNumbers(20)) // no value
// console.log("case 2 sum:",addTwoNumbers(2,3))
// console.log("case 3 sum:",addTwoNumbers())
// console.log("case 4 sum:",addTwoNumbers(1,null))// null passed
// console.log("case 5 sum:",addTwoNumbers(3,undefined))

// // Example 2 //
// let DEFAULT_VAL =30
// function addTwoNumbers(first,second = DEFAULT_VAL) {
//     console.log('first parameter is :',first)
//     console.log('second parameter is :',second)
//     return first+second;   
// }
// console.log("case 1 sum",addTwoNumbers(1))
// console.log("case 2 sum",addTwoNumbers(3, undefined))

// //Rest Parameters //
// function fun1(...params) {
//     console.log(params.length);
// }
// fun1();
// fun1(5);
// fun1(5, 6, 7);

// // Anonymous Function //
// var f = function() { return "hello"}
// console.log(f())

// Example anonymous Parameterized Function //
// var func = function(x,y){ return x*y};
// function product() {
//     var result;
//     result = func(10,20);
//     console.log("The product : "+result)
// }
// product()

// Function Constructor //
// var func = new Function("x", "y", "return x*y;");
// function product(){
//     var result;
//     result = func(10,20);
//     console.log("The product : "+result)
// }
// product()

// Recursion //
// function factorial(num){
//     if (num <= 0){
//         return 1;
//     } else {
//         return ( num * factorial(num-1) )
//     }
// }console.log(factorial(6))

// Anonymous Recursive Function //
// (function(){
//     var msg = "Hello World"
//     console.log(msg) 
// })()

// Lambda Expression //
// var foo = (x)=>10+x
// console.log(foo(10))

// Lambda Statement//
// var msg = ()=> {
//     console.log("function invoked")
// }
// msg()

//syntactic Variations//
// var msg = x=> {
//     console.log(x)
// }
// msg(10)

// function Hoisting //
// hoist_function();
// function hoist_function() {
//     console.log("foo");
// }

// next hoist //
// hoist_function(); // TypeError: hoist_function() is not a function//
// var hoist_function() = function() {
//     console.log("bar");
// };

// Immediately Invoked Function Expression (IIFE)//
// var main = function() {
//     var loop = function() {
//         for(var x = 0;x<5;x++) {
//             console.log(x);
//         }
//     }();
//     console.log("x can not be accesed aoutside the block scope x value is :"+x)
// }
// main();

// Example 2 IIFE //
// var main = function() {
//     (function() {
//         for(var x = 0;x<5;x++) {
//             console.log(x);
//         }
//     })();
//     console.log("x can be accessed outside the block scope x value is :"+x);
// }
// main();

// example illustrates//
// "use strict"
// function* rainbow() {
//     // the asterisk marks this as a generator
//     yield 'red';
//     yield 'orange';
//     yield 'yellow';
//     yield 'green';
//     yield 'blue';
//     yield 'indigo';
//     yield 'violet';
// }
// for(let color of rainbow())
//     console.log(color);

// Consider the following example//
// function* ask() {
//     const name = yield "what is your name?";
//     const sport = yield "What is your favorite sport?";
//     return `${name}'s favorite sport is ${sport}`;
// }
// const it = ask();
// console.log(it.next());
// console.log(it.next('Ethan'));
// console.log(it.next('Cricket'));

// Arrow Function //

//     setTimeout(function(){
//     console.log('Learning at TutorialsPoint is fun!!')
// },1000)

// Arrow function //

// const add = (n1,n2) => n1+n2
// console.log(add(10,20))

// const isEven = (n1) => {
//     if (n1%2 ==0) 
//         return true;
//     else 
//         return false;
        
// }
// console.log(isEven(10))

// Array Prototype map //

// const names = ['TutorialsPoint','Mohtashim','Bhargavi','Raja']
// names.map((element,index)=> {
//     console.log('inside arrow function')
//     console.log('index is '+index+' element value is :'+element)
// })

// Arrow function and "this" //

//constructor function//
// function Student(rollno,firstName,lastName) {
//     this.rollno = rollno;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullNameUsingAnonymous = function(){
//         setTimeout(function(){
            //cretes a new instance of this ,hides outer scope of this//
//             console.log(this.firstName+ " "+this.lastName)
//         },2000)
//     }
//     this.fullNameUsingArrow = function(){
//         setTimeout(()=>{
//             // uses this instance of outer scope
//             console.log(this.firstName+ " "+this.lastName)
//         },3000)
//     }
// }
// const s1 = new Student(101,'Mohammad','Mohtashim')
// s1.fullNameUsingAnonymous();
// s1.fullNameUsingArrow();

// Array //
var arr_names = new Array(4)
for(var i = 0;i<arr_names.length;i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}

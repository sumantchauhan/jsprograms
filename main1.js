// console.log(x);
// var x; //undefined
// let x; //Uncaught ReferenceError: Cannot access 'x' before initialization


// var greeter = "hey hi";
//     var times = 4;

//     if (times > 3) {
//         var greeter = "say Hello instead"; 
//     }

//     console.log(greeter) //"say Hello instead"
    


let log = console.log

function varScope(){
    var time=3;
    if(time ===3){
        var k =5; 
    }
    // console.log(k)
}

varScope(); // 5 function scope

function letScope(){
    var time = 3;
    if(time === 3){
        let k =5;
    }
    // console.log(k);
}

// letScope(); //Uncaught ReferenceError: k is not defined (block scope)



let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);//"say Hello instead"
    }
//    console.log(hello) // hello is not defined

var a = [1,2,3,4,5];
var b = a;

b.pop();
a.pop();

// console.log(a);
// console.log(b);


//x() OR console.log(x()); OR  console.log(x);  //Uncaught ReferenceError: Cannot access 'x' before initialization
let x = function(){
    console.log(x)
};

// x();
// console.log(x);

xyz()
function xyz(){
    // console.log(xyz()) //Uncaught RangeError: Maximum call stack size exceeded
    // xyz(); //Uncaught RangeError: Maximum call stack size exceeded
}


console.log(name);

var name="sumant";


(function foo(i) {
    if (i === 3) {
        return;
    }
    else {
        foo(++i);
    }
}(1));


function testing(){
    var a = 1;
    b = 2;
    
    // delete this.a; // Throws a TypeError in strict mode. Fails silently otherwise.
    // delete this.b;
    
    console.log(a, b); // Throws a ReferenceError.
    // The 'b' property was deleted and no longer exists.
}

testing();

let xx=10;
function testing1(){
   xx=5;
   yy=10 //create a global variable yy
}

testing1();
console.log(xx,yy);


function addArrayElements(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        // sum +=arr[i]; //or
        sum = sum+arr[i];
    }
    return sum;
}

let result = addArrayElements([1,2,3,5,7])
console.log("sum result",result);


function checkTimeoutWithVar(){
    for(var i=0;i<10;i++){
        setTimeout(function(){
            console.log("Hello",i)
        },5000) 
    }
}

// checkTimeoutWithVar();


  function reverseString(str){
    var result = "";
    for(var i=str.length;i=>0;i--){
        // result= result + str.charAt(i);
        console.log(str.charAt(str[i]))
    }
    // console.log(result)
    // return result;
}

// reverseString("Hello")

// console.log("Hello");



// log(dsjijsi);//undefined -- the dsjijsi will go to top of the file and assign undefined (initialization is not hoisting)
// var dsjijsi = 7;
// log(dsjijsi) // 7


// log(kdjkjfd); //Uncaught ReferenceError: Cannot access 'kdjkjfd' before initialization
let kdjkjfd = 5;
log(kdjkjfd) //will not execute


let num = 0;

async function increment(){
    num += await 2;  //Promise.resolve(2) // waiting for 2
    // log(num);
} 

increment();

num +=1;
// log(num);

// 1,2


function fun1(){
    log("Hello");

    function innerFun1(){
        log("Hii")
    }

    innerFun1();
}

// fun1();  //Hello Hii



// fun2(); // Hello Hii
function fun2(){
    log("hello");

    function innerFun2(){
        log("Hii")
    }

    innerFun2();
}


// fun3();//Hello Hii
function fun3(){
    log("Hello")

    inner3();
    function inner3(){
        log("Hii")
    }
}
// fun3();//Hello Hii




// fun4(); //Uncaught TypeError: fun4 is not a function (function expression can't Hoisting)
// log(fun4); //undefined (just like a variable)
// log(fun4()); //Uncaught TypeError: fun4 is not a function
var fun4 = function(){
    log("Hello");
}

// fun4();  //Hello
// log(fun4) //ƒ () { log("Hello");}
// log(fun4()); //undefined


// fun5(); //Hello  
        //Uncaught TypeError: innerFun3 is not a function
function fun5(){
    log("Hello")

    innerFun3();
    var innerFun3 = function(){
        log("Hii");
    }
}

// fun5(); //Hello  
        //Uncaught TypeError: innerFun3 is not a function


// fun6(); //Uncaught ReferenceError: Cannot access 'fun6' before initialization
// log(fun6); //Uncaught ReferenceError: Cannot access 'fun6' before initialization (because let variable is not Hoisting)       
let fun6 = function(){
    log("Hello")
}

// fun6();//Hello


// fun7(); //Uncaught TypeError: fun7 is not a function
// log(fun7) //undefined
var fun7 = function(){
    log(fun7);
}

// log(fun7); //ƒ (){
           //log(fun7);
           //}

// fun7(); //ƒ (){
           //log(fun7);
          //}

// log(fun7()); //ƒ (){ log(fun7);} 
             // undefined


function fun8(){
    log("Hello",arguments[0],arguments[1]);
}

// fun8("Stev","Job") //Hello Stev Job


function multiple(x) {
    function fn(y)
    {
        return x * y;
    }
    return fn;
}

var triple = multiple(3);
// log(triple(2)); // returns 6
// log(triple(3)); // returns 9





var add = function sum(val1, val2) {
    return val1 + val2;
};

// var result1 = add(10,20); // 30
// var result2 = sum(10,20); // not valid Uncaught ReferenceError: sum is not defined







function fun9(){
    fun9 = 10; //fun9 become a global var variable
    log(fun9);
}

// fun9();//10

// log(fun9);//10


function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  a = addSquares(2, 3); // returns 13
  b = addSquares(3, 4); // returns 25
  c = addSquares(4, 5); // returns 41





  (function(){
	console.log("Anonymous function invocation");
	console.log(this === window);
})();//Anonymous function invocation
     // true




    //  function foo () {
    //     'use strict';
    //     console.log(this); //undefined
    //     console.log("Simple function call") //Simple function call
    //     console.log(this === window); //false
    // }
    
    // foo(); //prints false on console as in “strict mode” value of “this” in global execution context is undefined.




function foo () {
    'use strict';
    console.log("Simple function call")
    console.log(this === window); 
    }

let user = {
	count: 10,
	foo: foo,
	foo1: function() {
		console.log(this === window);
	}
}

user.foo()  // Prints false because now “this” refers to user object instead of global object.
let fun10 = user.foo1;
fun10() // Prints true as this method is invoked as a simple function.
user.foo1()  // Prints false on console as foo1 is invoked as a object’s method


function fun11(){
    log("Regular Function")
}

// log(fun11.prototype) //{constructor: ƒ}

// var rFunction = new fun11(); //Regular Function
// log(rFunction); //fun11 {}

// fun12(() =>{
//     log("Arrow Function");
// });

// fun12(); //Uncaught ReferenceError: fun12 is not defined


var fun13 = (()=>{
    log("Another Arrow Function");
});

// log(fun13()); //Another Arrow Function
              //undefined

// fun13(); //Another Arrow Function

// const rFun = new fun13();// Uncaught TypeError: fun13 is not a constructor


// log(fun13) //()=>{
           //log("Another Arrow Function");
           //}

// log(fun13.prototype); //undefined  (no prototype properties in arrow function)




function fun14(){
    if(true){
        var blockVar=13;
        let blockLet=15;
    }
    log(blockVar); //13
    log(blockLet); // Uncaught ReferenceError: blockLet is not defined
}

// fun14();
let log = console.log;

function regularFunction(){
    log("this in regular function",this);//global: [Circular],
}

// regularFunction();

const arrowFunction = () => {
    log("this in arrow function",this); //this in arrow function {}
};

// arrowFunction();


function person(){
    this.age = 27;
    // log(age); //27
    // log(this.age); //27
    function xyz(){
        // log("this in regular ", this); //this in regular  { console: [Getter],
        log(this.age);
    }

    xyz();

     const abc = () =>{
        // log("this in arrow ", this); //this in arrow  { console: [Getter],
        log(this.age);
    }

    abc();
    
}

// person();

const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: function() {
      return `${this.manufacturer} ${this.model}` //Ford Fiesta
    }
  }

//   log(car.fullName());

  const car1 = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: () => {
      return `${this.manufacturer} ${this.model}` //undefined undefined
    }
  }

//   log(car1.fullName());



// functionDec(); //Function declaration
// express(); //TypeError: express is not a function
// express1(); //ReferenceError: express1 is not defined

//function declaration
function functionDec(){
  log("Function declaration");
};


//Function expression
var express = function(){
  log('Function expression');
};

let express1 = function(){
  log('Function expression');
};



function foo(callback){
  log("Hello");
  setTimeout(() => {
    log("world");
  },2000);
  callback();
}

function callbackFunction() {
  log("Callback function calling");
}

// foo(callbackFunction());//TypeError: callback is not a function
// foo(callbackFunction); //Hello
                      //Callback function calling
                      //after 2 second world




function bar(callback1){
  log("Hello");
  setTimeout(() => {
    log("Settimeout")
  },0);
  callback1();
};

// bar(callbackFunction);  //Hello
                        //Callback function calling
                        //Settimeout



var xyz = 123;

const arrowFunction1 = () => {
  log(this); // {}
  // log(xyz); //123
  // log(this.xyz); //undefined
};

// arrowFunction1();


const arrowFunction2 = () => {
  // log(xyz); //ReferenceError: xyz is not defined
  let xyz;
  xyz = 50;
  log(xyz); //50
}

// log(xyz); //123
// arrowFunction2();
// log(xyz); //123


const arrowFunction3 = () => {
  log(xyz); //undefined
  var xyz;
  xyz = 50; //50
  log(xyz);
}


// log(xyz);  //123
// arrowFunction3();
// log(xyz); //123



const arrowFunction4 = () => {
  // log(xyz); //123
  xyz = 50;
  // log(xyz); //50
}


// log(xyz); //123
// arrowFunction4();
// log(xyz); //50



let y = 10;

const arrowFunction5 = () => {
  // log(y) //10
  y = 20;
  // log(y); //20
};

// log(y); //10
// arrowFunction5();
// log(y); //20


this.aa = 20;

const arrowFunction6 = () => {
  // log(aa); //ReferenceError: aa is not defined
  // log(this.aa); //20
  this.aa = 30;
}



// log(aa);  //ReferenceError: aa is not defined
// log(this.aa); //20

// arrowFunction6();
// log(this.aa); //30

function regularFunction1() {
  // log(aa);  //ReferenceError: aa is not defined
  log(this.aa); //undefined
}

// regularFunction1();



function stringSorting(str) {
  let string = str.split('');
  string.sort();
  return string.join('');
}

// let sortedString = stringSorting('xyzbcaw'); //abcwxyz
// log(sortedString);

function stringSorting1(str) {
  let string = str.split('');
  string.sort();
  return string.join('-');
}

// let sortedString1 = stringSorting1('xyzbcaw'); //a-b-c-w-x-y-z
// log(sortedString1);


let arr1 = [1,2,3,4,5,6,7,8,9,10];

function usingMap() {
  let res = arr1.map(item => item*2);
  return res;
};

// log(arr1);  //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// let res = usingMap(); 
// log(res);//[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

function usingForeach() {
  arr1.forEach(item => {
    item*3;
    log(item);
  });
}

usingForeach();





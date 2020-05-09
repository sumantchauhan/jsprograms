// Find Max And Min Value
findMaxAndMinValue = (arr) => {
    let maxVal = arr[0];
    let minVal = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>maxVal){
            maxVal = arr[i];
        }
        if(arr[i]<minVal){
            minVal = arr[i]
        }
    }
    return ({maxVal,minVal});
}

let arr = [2,3,4,8,9,40,12,54,1,10];

// console.log("findMaxAndMinValue",findMaxAndMinValue(arr))

// findMaxAndMinValue(arr);



// Find Second largest number
secondLargestNumber = (arr) =>{
    let largest = arr[0];
    let secondLargest = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
 
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];

        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
} 

console.log("SecondLargest",secondLargestNumber(arr));


// Reverse string
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log("Reverse String",reverseString('hello'));



// Reverse a String With Recursion
function reverseString1(str) {
    if (str === "")
      return "";
    else
      return reverseString1(str.substr(1)) + str.charAt(0);
  }
//   reverseString1("hello");
console.log("Reverse String1",reverseString1('world'));


// Remove duplicate items from objects
function removeDuplicates(arr) {
    var originalArr = arr.slice(0);
    var i, len, j, val;
    arr.length = 0;
    let length = originalArr.length;

    for (i = 0; i < length; ++i) {
        val = originalArr[i];
        if (!arr.some(function(item) { return thingsEqual(item, val); })) {
            arr.push(val);
        }
    }
}

function thingsEqual(thing1, thing2) {
    return thing1.place === thing2.place
        && thing1.name === thing2.name;
}

var things = [
  {place:"here",name:"stuff"},
  {place:"there",name:"morestuff"},
  {place:"there",name:"morestuff"},
  {place:"here",name:"stuff"},
];

removeDuplicates(things);
console.log(things);





  //Another function to remove duplicate   
  function removeDuplicates1(array) {
    let uniq = {};
    return array.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
  }


  const allTests = [
    {name: 'Test1', id: '1'},
    {name: 'Test4', id: '1'},  
    {name: 'Test3', id: '3'},
    {name: 'Test2', id: '2'},
    {name: 'Test2', id: '2'},
    {name: 'Test3', id: '3'}
  ];
  
  console.log("removeDuplicates",removeDuplicates1(allTests));



//Another Function
const arr1 = [
    { id: 1, name: "test1" },
    { id: 2, name: "test2" },
    { id: 2, name: "test3" },
    { id: 3, name: "test4" },
    { id: 4, name: "test5" },
    { id: 5, name: "test6" },
    { id: 5, name: "test7" },
    { id: 6, name: "test8" },
    { id: 5, name: "test6" },
    { id: 5, name: "test7" },
    { id: 6, name: "test8" }
  ];
  
  const filteredArr = arr1.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  console.log("filteredArr",filteredArr);



//Another
function removeDuplicates2() { 
      
    // Create an array of objects 
    books = [ 
        { title: "C++", author: "Bjarne" }, 
        { title: "Java", author: "James" }, 
        { title: "Python", author: "Guido" }, 
        { title: "Java", author: "James" }, 
        { title: "Java", author: "xyz" }, 
    ]; 
      
    // Display the list of array objects 
    console.log("books",books); 

    // Declare a new array 
    let newArray = []; 
      
    // Declare an empty object 
    let uniqueObject = {}; 
      
    // Loop for the array elements 
    for (let i in books) { 

        // Extract the title 
        objTitle = books[i]['title']; 

        // Use the title as the index 
        uniqueObject[objTitle] = books[i]; 
    } 
      
    // Loop to push unique object into array 
    for (i in uniqueObject) { 
        newArray.push(uniqueObject[i]); 
    } 
      
    // Display the unique objects 
    console.log("unique book",newArray); 
} 

removeDuplicates2();


// Another
function removeDuplicates3() { 
    // Create an array of objects 
    books = [ 
        { title: "C++", author: "Bjarne" }, 
        { title: "Java", author: "James" }, 
        { title: "Python", author: "Guido" }, 
        { title: "Java", author: "James" }, 
        { title: "Python", author: "xyz" }, 
        { title: "Java", author: "xyz" }, 
        { title: "xyz", author: "Guido" }, 
        { title: "xyz", author: "James" }, 
        { title: "Python", author: "Guido" }, 
        { title: "Java", author: "James" }, 
        { title: "Python", author: "xyz" }, 
    ]; 
      
    jsonObject = books.map(JSON.stringify); 

    console.log("Books",books); 

    uniqueSet = new Set(jsonObject); 
    uniqueArray = Array.from(uniqueSet).map(JSON.parse); 

    console.log("unique books",uniqueArray); 
} 

removeDuplicates3();



// Reverse word of sentence
reverseWord = (str) => {
    let str1 = str.split(" ");
    let res = [];
    for(let i=str1.length-1;i>=0;i--){
        res.push(str1[i])
    }
    console.log("Word",str1);
    return res;
}

let str = "xyz abx csg sdhuhusdh dshia sdhjisa dsjijds jdodjsa dshjids";
console.log("reverseWord;",reverseWord(str))





//Revese String
function reverseInPlace(str) {
    let reversed = '';
  
    for (let character of str) {
      reversed = character + reversed;
    }
  
    return reversed;
  }

  let xyz = "dshuyusdh jhsadjids jdsjids";
  console.log("reverseInPlace",reverseInPlace(xyz));






// Remove all white space
removeWhiteSpace = (str) => {
    return str.replace(/\s/g, "");
}

console.log("removeWhiteSpace",removeWhiteSpace(xyz));




//Parenthesis Matching Problem in JavaScript
let isMatchingBrackets = function (str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
  
    for (let i = 0; i < str.length; i++) {
  
        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();
  
            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) {
              return false;
            };
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {
          return false;
        };
  
    return true;
 }
  
 console.log(isMatchingBrackets("(){}")); // returns true
 console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
 console.log(isMatchingBrackets("({(()))}}"));  // returns false
 console.log(isMatchingBrackets("}"));




//  Get duplicate characters count in a string [duplicate]
function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    console.log("String",string);
    return freq;
    };
    
    console.log("getFrequency",getFrequency('Indivisibilities'));




    // find_unique_characters
    function find_unique_characters(str) {
        var unique = '';
        for (var i = 0; i < str.length; i++) {
          if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
            unique += str[i];
          }
        }
        console.log("Str",str)
        return unique;
      }
      
      console.log("find_unique_characters",find_unique_characters('baraban'));
      console.log("find_unique_characters",find_unique_characters('anaconda'));




    //showUniqChars
      const showUniqChars = (text) => {
        let uniqChars = "";
      
        for (const char of text) {
          if (!uniqChars.includes(char))
            uniqChars += char;
        }
        console.log("text",text)
        return uniqChars;
      };

      console.log("showUniqChars",showUniqChars('bananaanaconda'));


    //   Another
    function makeUnique(str) {
        console.log("str",str)
        return String.prototype.concat(...new Set(str))
      }
      
      console.log("makeUnique",makeUnique('abc'));    // "abc"
      console.log("makeUnique",makeUnique('abcabcjdshguhudafgfsajdxkdssfsaf')); // "abc"





    // Use to remove duplicate elements from the array 

    const numbers = [45,90,45,2,3,4,4,2,45,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

    console.log([...new Set(numbers)]) 

    // [2, 3, 4, 5, 6, 7, 32]





    // Call()
    let obj1 = {num:2};

    const addToThis = function(a){
      return this.num+a;
    }

    console.log("addToThis",addToThis.call(obj1,5));


    // Another
    const addToThis1 = function(a,b,c){
      return this.num + a + b + c;
    }

    console.log("addToThis1",addToThis1.call(obj1,3,4,5));




    // Apply()
    let num1 = [1,2,3,4,5]
    console.log("Apply()",addToThis1.apply(obj1,num1));



    // Bind()
    let binded = addToThis1.bind(obj1);
    console.log("Bind()",binded(1,2,3));

    // difference between call and apply: call() is used for function arguments, apply() is used for array values


    addParameters = (a,b,c) => {
      return a+b+c;
    }

    // console.log("AddParameters",addParameters(2,4,6));


    // Fibonacci Serese
    febonacci = (num) => {
      let t1 = 0, t2 = 1;
      let feb=[];
      for (let i = 1; i <= num; ++i){
        console.log(t1+',');
        feb.push(t1);
        let sum = t1 + t2;
        t1 = t2;
        t2 = sum;
      }
      console.log("feb",feb)
    }

    // febonacci(10);

    // Fibonacci serese using recursion
    let  n1 = 0, n2 = 1, n3 = 0;
    function febonacciRecursion(count) {
      if (count > 0) {
         n3 = n1 + n2;
         n1 = n2;
         n2 = n3;
         console.log(n3);
         febonacciRecursion(count - 1);
      }
   }
   
      let count = 10;
      console.log(n1)
      console.log(n2)
      // febonacciRecursion(count - 2);


     function getFibonacci(n) { 
       if (n == 1) { return 1; } 
       if (n == 2) { return 1; } 
       return getFibonacci(n - 1) + getFibonacci(n - 2); 
      }

      console.log(getFibonacci(10));

      
      
      // Factorial
      const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
      console.log("Fectorial",factorial(5));


  
    
   
    // console.log(febonacciRecursion(10));


/** 
console.log("1===true",1===true); //false
console.log("1==true",1==true); //true
console.log("0===false",0===false); //false
console.log("0==false",0==false);  //true
console.log("undefined == null",undefined == null); //true
console.log("undefined === null",undefined === null); //false
console.log("this",this);  //window
console.log("'' === false","" === false); //false
console.log("'' == false","" == false); //true
console.log("[].length",[].length); //0   
*/


var output = (function(x){
  delete x;
  return x;
})(10);

// console.log(output); //10




// Given an array of words ['cat', 'dog', 'tac', 'god', 'act'], return an array with all the anagrams grouped together. Makes sure the anagrams are unique.
var arrays = ['hello'];
var arrays1 = ['cat', 'dog', 'tac', 'god', 'act'];
var arrays2 = ['cat']

var allAnagrams = function(arr) {
    var anagrams = {};
    arr.forEach(function(str) {
        var recurse = function(ana, str) {
            if (str === '') 
                anagrams[ana] = 1;
            for (var i = 0; i < str.length; i++)
                recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        };
        recurse('', str);
    });
    return Object.keys(anagrams);
}

// console.log(allAnagrams(arrays));
// console.log(allAnagrams(arrays2));




// Anagram
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
      return false;
  }
  const result = {};
  for (let i=0;i<str1.length;i++) {
      let char = str1[i];
      result[char] = result[char] ? result[char] += 1 : result[char] = 1;
  }

  for (let i=0;i<str2.length;i++) {
      let char = str2[i];
      if (!result[char]) {
          return false;
      }
      else {
          result[char] = -1;
      }
  }
  return true;
}
console.log(anagram('leohl','hello'));




function isAnagram (str1, str2) {    
  if (str1.length !== str2.length) {
      return false;    
  }
  // create a character count for the string
  var str1Count = {};
  Array.prototype.forEach.call(str1, function(ch) {
      str1Count[ch] = str1Count[ch] ? 1 + str1Count[ch] : 1;
  });
  // compare the character count with the second string
  var str2len = str2.length;
  for (var i = 0; i < str2len; i++) {
      if(!str1Count[str2[i]]) {
          return false;
      } else {
          str1Count[str2[i]] -= 1;
      }
  }
  return true;
}

console.log(isAnagram('dog','god')); // true
console.log(isAnagram('foo','bar')); // false
console.log(isAnagram('ofoo','fooo')); // false




function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * x * x; 
}
let numbers1 = [0, 1, 2, 5, 10];
let cube = map(f,numbers1);
console.log(cube);




//closures
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

// console.log(a);
// console.log(b);
// console.log(c);


function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)



var fun1 = function function1() {
  console.log("Named Function")
}

// fun1();

var fun2 = function(){
  console.log("anonymous function")
};

// fun2();


var multiply = function func_name(x, y) {
  return x * y;
};

// console.log(func_name(5,6))//undefined
// console.log(multiply(5,6));//30



var foo1 = new Function("alert(anonymous);");
// foo1();//Uncaught ReferenceError: anonymous is not defined


const list = ["hello","world","how","are you"];

let mapList = list.map(list => list+"-kind");
console.log("maplist",mapList);

let filteredList = list.filter(list => list.length>3);
console.log("filteredList",filteredList);

let filteredList1 = list.filter((list) => {
  if(list.length>3){
    return list+"-kind";
  }
});

console.log("listFiltered1",filteredList1);


// find if two arrays contain any common item

let array1 = [2,3,4,5,6];
let array2 = [1,20,9,8];

function findeCommonItem(arr1,arr2) {
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      if(arr1[i]===arr2[j]){
        return true;
      }
    }
  }
  return false;
}

console.log(findeCommonItem(array1,array2));


function findCommon(arr1,arr2) {
  for(let i=0;i<arr1.length;i++){
    if(arr2.includes(arr1[i])){
      return true;
    }
  }
  return false;
}

console.log("findCommon",findCommon(array1,array2));


function isPrime(number){
  if(number === 0 || number === 1 || number%2==0){
  return false;
  }
  for(var i=3;i<number;i=i+2){
  if(number%i==0){
  return false;
  }
  }
  return true;
  }

  console.log("isPrime",isPrime(105));


  // All permutations of a string.


  // Armstrong

  function armstrong(number){
    // console.log(number.toString().length) //length of number
    let copyOfNumber = number;
    let noOfDigits = number.toString().length;
    let sum = 0;
    while (copyOfNumber != 0)
    {
        let lastDigit = copyOfNumber % 10;
        let lastDigitToThePowerOfNoOfDigits = 1;
        for(let i = 0; i < noOfDigits; i++)
        {
            lastDigitToThePowerOfNoOfDigits = lastDigitToThePowerOfNoOfDigits * lastDigit;
        }
        sum = sum + lastDigitToThePowerOfNoOfDigits;
        copyOfNumber = copyOfNumber / 10;
    }
    if (sum == number)
    {
        console.log(number," is an armstrong number");
    }
    else
    {
        console.log(number," is not an armstrong number");
    }
  }

  // armstrong(153);



function synCall(){
  console.log("Hello");
  setTimeout(function(){
    console.log("Hii")
  },5000);
  console.log("World")
}

// synCall();


function objectCompare(){
  obj1={
    name:'aaaa',
    age:21
  }
  obj2={
    name:'aaaa',
    age:21
  }

  console.log(obj1);
  console.log(obj2);
  console.log("is both objects ate equal",obj1===obj2);
}

// objectCompare();


function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  console.log("aProps",aProps);
  console.log("bProps",bProps);

  if (aProps.length != bProps.length) {
      return false;
  }

  for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];
      if (a[propName] !== b[propName]) {
          return false;
      }
  }

  return true;
}

var jangoFett={
  occupation: "Bounty Hunter",
  genetics: "superb"
};

var bobaFett = {
  occupation: "Bounty Hunter",
  genetics: "superb"
};

console.log(isEquivalent(bobaFett, jangoFett));



let duplicateArray=[
  {
    name:'aaaa',
    age:21,
    sex:'male'
  },
  {
    name:'xyz',
    age:21,
    sex:'male'
  },
  {
    name:'aaaa',
    age:21,
    sex:'male'
  },
  {
    name:'aaaa',
    age:21,
    sex:'male'
  },
  {
    name:'aaaa',
    age:21,
    sex:'male'
  },
  {
    name:'aaaa',
    age:21,
    sex:'male'
  }
];


var removeDuplicateObjects = function (arr) {
  // return arr.filter((v,i,a)=>a.findIndex(t=>(t.name === v.name && t.age===v.age && t.sex === v.sex))===i);
  return arr.filter((v,i,a) => a.findIndex(t => (t.age === v.age)) === i);
};

// console.log("Unique array",removeDuplicateObjects(duplicateArray));


function removeDup(arr) {
  let result = []
  arr.forEach((item, index) => { if (arr.indexOf(item) == index) result.push(item) });
  return result;
};

console.log("Remove Duplicate Array",removeDup(duplicateArray));


var button = document.querySelector('button');
console.log('btn',button)

// Rx.Observable.fromEvent(button, 'click')
// .subscribe(res => console.log(res));


var onserver = {
  next:function(val){
    console.log("val",val)
  }
}

Rx.Observable.create(function(obs){
  obs.next('A Value')
})
 .subscribe(onserver);



// var dshsddsijidsjiuisd=5;
// let dshsddsijidsjiuisd = 5;
const dshsddsijidsjiuisd = 10;
 console.log(dshsddsijidsjiuisd)
let log = console.log;

let items = [
  {
    name:'A',
    count:1000
  },
  {
    name:'A',
    count:500
  },
  {
    name:'A',
    count:400
  },
  {
    name:'A',
    count:700
  },
  {
    name:'A',
    count:10
  },
  {
    name:'A',
    count:100
  },
  {
    name:'A',
    count:800
  },
]

function filterData(arr){
  let res =   arr.filter(item => item.count>100);
  return res;
}

// filterData(items);

// console.log(filterData(items))


function camelToSnake(string) {
       return string.replace(/[\w]([A-Z])/g, function(m) {
           return m[0] + "_" + m[1];
       }).toLowerCase();
   }

let snakeCase = camelToSnake("HackerRank");
// console.log(snakeCase);

function secondLargest(arr){
  let largest = arr[0];
  let secondLargest = arr[1];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
      secondLargest = largest;
      largest= arr[i];
    }else if(arr[i]>secondLargest){
      secondLargest = arr[i]
    }
  }
  return secondLargest;
}

// console.log(secondLargest([3,10,8,37,22,35,5]));

var foo = "bar";

function bar(){
  var foo = "baz";
};

function baz(foo){
  console.log(foo); // undefined
  foo = "bam";
  bam = "yay";
  console.log(foo); //bam
  console.log(bam); // yay
}

// baz();

// console.log(bam); //yay

var bar = "bar";

function foo1(str){
  eval(str); // cheating!
  console.log(bar); //42
}

// foo1('var bar = 42;');


function stringSorting(string){
  var arr = string.split("");
  var temp;
  for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        temp= arr[i];
        arr[i]= arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join();
};

let sortedString = stringSorting('aabsusaacdkhjissac');
// console.log(sortedString);


let obj = {
  data:2,
  getData: function(){
    return this.data;
  }
}

function fun1(getter){
  // return greater() * greater()  //Error greater in not a function
  return getter * getter;
}

// console.log(obj.data); //2
// console.log(fun1(obj.getData())); // 4


function Person(firstName,lastName){
  this.firstName = firstName,
  this.lastName = lastName
};

Person.prototype.age = 29;

var jim = new Person('Jim', 'Cooper');
var sofia = new Person('Sofia', 'Cooper');

// console.log(jim)// Person { firstName: 'Jim', lastName: 'Cooper' }
// console.log(Person.age); //undefined
// console.log(Person.prototype.age); //29
// console.log(jim.age); //29
// console.log(sofia.age); //29

jim.age = 18; // instance properties override prototype properties
// console.log(jim); //Person { firstName: 'Jim', lastName: 'Cooper', age: 18 }

// log(this); // {}
function thisFunction(){
  // log(this)
}

// thisFunction();





let objectArray = [
  {a:1},
  {b:2}
];

function accesObjectArray(objectArray){
  for(let item in objectArray){
    log(item);
  }
}

// accesObjectArray(objectArray);


const array_Sum = (array1,array2) => {
  var result = [];
  var ctr = 0;
  var x=0;
  if(array1.length === 0){
    return 'array1 is empty'
  }
  if(array2.length === 0){
    return 'array2 is empty'
  }
  while (ctr < array1.length && ctr < array2.length) {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }
  if (ctr === array1.length) {
     for (x = ctr; x < array2.length; x++)   {
       result.push(array2[x]);
     }
   }else{
     for (x = ctr; x < array1.length; x++) {
       result.push(array1[x]);
     }
   }
   return result;
};

// log(array_Sum([10,20,5,0],[20,25,1,10,1,5])); //[ 30, 45, 6, 10, 1, 5 ]




//find duplicate values in a array.
function findDuplicate(array){
  var object = {};
  var result = [];

  array.forEach(function (item) {
    if(!object[item])
      object[item] = 0;
      object[item] += 1;
  });

  for (var item in object) {
    if(object[item] >= 2) {
        result.push(item);
    }
 }
//  log(object); //{ '1': 1,'2': 1,'3': 1,'4': 2,'5': 1,'6': 1,'7': 3,'8': 1,'71': 1,'-2': 1 }
 return result;
}

// log(findDuplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));  //[ '4', '7' ]




/*
flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.
input:- [1, [2], [3, [[4]]],[5,6]]
output:- [1, 2, 3, 4, 5, 6]

input:- [1, [2], [3, [[4]]],[5,6]], true
output:- [1, 2, 3, [[4]], 5, 6]
*/


let flatten = function(a, shallow,r){
  if(!r){ r = []}
  if (shallow) {
    return r.concat.apply(r,a);
    }  
    for(var i=0; i<a.length; i++){
          if(a[i].constructor == Array){
              flatten(a[i],shallow,r);
          }else{
              r.push(a[i]);
          }
      }
      return r;
}

// log(flatten([1, [2], [3, [[4]]],[5,6]])); //[ 1, 2, 3, 4, 5, 6 ]
// log(flatten([1, [2], [3, [[4]]],[5,6]], true)); //[ 1, 2, 3, [ [ 4 ] ], 5, 6 ]
// log(flatten([1, [2], [3, [[4]]],[5,6]], false)); //[ 1, 2, 3, 4, 5, 6 ]



/*

compute the union of two arrays.
Sample Data:
union([1, 2, 3], [100, 2, 1, 10]);
[1, 2, 3, 10, 100]

*/
function union(arra1, arra2) {
  
  if ((arra1 == null) || (arra2==null)) 
    return void 0;
  
  var obj = {};
 
  for (var i = arra1.length-1; i >= 0; -- i)
     obj[arra1[i]] = arra1[i];
 
  for (var i = arra2.length-1; i >= 0; -- i)
     obj[arra2[i]] = arra2[i];
 
  var res = [];
 
  for (var n in obj)
  {
  
    if (obj.hasOwnProperty(n)) 
      res.push(obj[n]);
  }
 
  return res;
}
// log(union([1, 2, 3], [100, 2, 1, 10])); //[ 1, 2, 3, 10, 100 ]



/*
find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3

*/

function twoSum(nums, target_num) {
  var map = [];
  var indexnum = [];

  for (var x = 0; x < nums.length; x++){
    if (map[nums[x]] != null){
      var index = map[nums[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    }else{
      map[target_num - nums[x]] = x;
    }
  }
    return indexnum;
  }

  // log(twoSum([10,20,10,50,60,70,40],50)); //[2,6]


  /*
  merge two arrays and removes all duplicates elements.
  Test data:
  var array1 = [1, 2, 3];
  var array2 = [2, 30, 1];
  merge_array(array1, array2);
  [3, 2, 30, 1]
  */

 function merge_array(array1, array2) {
  var result_array = [];
  var arr = array1.concat(array2);
  var len = arr.length;
  var assoc = {};

  while(len--) {
      var item = arr[len];

      if(!assoc[item]) 
      { 
          result_array.unshift(item);
          assoc[item] = true;
      }
  }

  return result_array;
}


var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

// log(merge_array(array1, array2));

/*
  get nth largest element from an unsorted array.

  Test Data:
  nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4);
  89
*/


function nthlargest(arra,highest){
  var x = 0,
    y = 0,
    z = 0,
    temp = 0,
    tnum = arra.length, 
    flag = false, 
    result = false; 

  while(x < tnum){
    y = x + 1; 
    
    if(y < tnum){
      for(z = y; z < tnum; z++){
        
        if(arra[x] < arra[z]){
          temp = arra[z];
          arra[z] = arra[x];
          arra[x] = temp;
          flag = true; 
        }else{
          continue;
        }	
      }					
    }
    
    if(flag){
      flag = false;
    }else{
      x++; 
      if(x === highest){ 
                  
        result = true;
      }	
    }
    if(result){
      break;
    }
  }

  return (arra[(highest - 1)]);	
}

// log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)); 


/*
  insert dashes (-) between each two even numbers. 
  For example if you accept 025468 the output should be 0-254-6-8.
*/


const insertDash = (num) => {
  const str = num.toString();
  const result = [str[0]];
    
  for(let x=1; x<str.length; x++)
    {
      if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
      {
        result.push('-', str[x]);
      }
      else
      {
        result.push(str[x]);
      }
    }
  console.log(result.join(''));
} 
// insertDash('025468'); //0-254-6-8


let object1 = {
  name:'Sumant',
  age:25
};

let object2 = {
  name:'Neha',
  age:24,
  height:160
};

let mergeResult = {...object1};
let mergeResult1 = {...object1,...object2};

// log(mergeResult); //{ name: 'Sumant', age: 25 }
// log(mergeResult1); //{ name: 'Neha', age: 24, height: 160 }


// mergeResult.sex = 'Male';
// log(mergeResult); //{ name: 'Sumant', age: 25, sex: 'Male' }
// log(object1); //{ name: 'Sumant', age: 25 }


// object1.age = 26;
// log(mergeResult); //{ name: 'Sumant', age: 25 }
// log(object1); //{ name: 'Sumant', age: 25 }




let mergeResult2 = Object.assign({},object1);
// log(mergeResult2); //{ name: 'Sumant', age: 25 }

object1.age = 20;
// log(mergeResult2); //{ name: 'Sumant', age: 25 }
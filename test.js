let x = [1,2,3,["ghhgg",],[2,3],6,[4,5,5,[8,9],10],11];

function checkArray(x){
    for(let i in x){
        x[i] instanceof Array ? checkArray(x[i]):console.log(x[i])
    }
    // console.log(x[i]);
}

// checkArray(x);

//
let x1 = [1,2,3,[{"yuuyyu":90}],[2,3],6,[4,5,5,[8,9],10],11]; 
function checkArray1(x1){
    for(let i in x1){
        x1[i] instanceof Array ? 
        checkArray1(x1[i]): 
            x1[i] instanceof Object ? 
                console.log(x1[i][Object.keys(x1[i])]):console.log(x1[i])
    // console.log(x[i]);
    }
}
// checkArray1(x1);


let x2 = [1,2,3,[{"yuuyyu":90,"yuou":45,"xyp":{"opopo":788,"ruiei":900},"jrjr":90,"jrjf":["ottoto","topopp",[90,123455]]}],[2,3],6,[4,5,5,[8,9],10],11]; 

function checkArray2(x2){
    for(let i in x2){
        x2[i] instanceof Array ? 
          checkArray2(x2[i]) : 
          x2[i] instanceof Object ? 
                x2[i] instanceof Array ? 
                    checkArray2(x2[i]) : 
                    x2[i] instanceof Object ? 
                    checkArray2(x2[i]) : 
                            console.log(x2[i]) :  
                                console.log(x2[i])
    }
}

// checkArray2(x2);

let y={
    "yu":{"id":1,"ref":3},
    "zt":{"id":2,"ref":34},
    "zr":{"id":3,"ref":45},
    "sr":{"id":4,"ref":23}
}



// output
y={
    1:{"yu":"id","ref":3},
    2:{"zt":"id","ref":34},
    3:{"zr":"id","ref":45},
    4:{"sr":"id","ref":23}
}

function xyz(da){
    Object.keys(da).forEach(key => { 
            console.log(key,":", da[key]) 
        });
}

// xyz(y);

// critical Rendering Path
// Redux
// Redux thunk 
// Redux Saga
// state asyncronous () function pass inside set state
// redux syncronous api
// maptoSate
// maptoProps
// connet
//  redux component reducers , Actions , dispatch
//  why reduces are pure function or pure function
//  javascript prototype
//  proptypes
//  <>
//  fragments



let arr1 = [11,12,13,14,15,16,17,18,20,21];
let arr2 = [11,12,13,14,15,16,17,18,20,21,23];

function findMissing(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1]-arr[i] !==1){
            console.log(arr[i]+1);
        }
    }
}

// findMissing(arr1); //19
// findMissing(arr2);


let arr3 = [7,8,10,12,13,11,5,14,2,3,6];

function findPair(arr){
    let constant = 17;
    for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === constant){
                console.log(arr[i],arr[j]);
            }
        }
    }
}

// findPair(arr3);

// console.log(null == undefined); //true
// console.log(null === undefined); //false


let obj1 = {
    name:"SUMANT",
    getName:function(){
        setTimeout(() => {console.log(this.name)},0)
    }
}

// obj1.getName();//SUMANT

let str1="SUMANT";

function formateString(str){
    for(let i in str){
        console.log(str[i]+"-")
    }
}

// formateString(str1);


const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
// console.log(map1);


let kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
let rObj = {}
rObj[obj.key] = obj.value
return rObj
})

console.log(reformattedArray);

let sum = [5, 1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  });

// console.log(sum);


function createEmployee(firstName,lastName,gender,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender= gender;
    this.age = age;
};

const emp1 = new createEmployee("Sumant","Chauhan","Male",27);

// console.log(emp1);


let unsortedArray = [10,2,15,50,15,13,1,326,100,99,6];

function sortArray(arr){
    let temp;
    for(let i =0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i]=arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

// sortArray(unsortedArray);


const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1;
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }
    console.log(nums);
    return nums
  }

//   insertionSort(unsortedArray);


let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    console.log(arr);
    return arr;
}

// selectionSort(unsortedArray);
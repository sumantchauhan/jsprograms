let  meargingTwoObject = () => {
    let obj1 = {name:'Sumant',age:26};
    let obj2 = {sex:'male',native:'Delhi'}

    let res = {...obj1,...obj2};
    console.log("res",res);//{name: "Sumant", age: 26, sex: "male", native: "Delhi"}

    let res1 = Object.assign(obj1,obj2);
    console.log("res1",res1);//{name: "Sumant", age: 26, sex: "male", native: "Delhi"}

    let obj3 = {name:'Sumant',age:26};
    let obj4 = {name:'Jyoti',age:24};

    let res2 = {...obj3,...obj4};
    console.log("res2",res2);//{name: "Jyoti", age: 24}

    let res3 = Object.assign(obj3,obj4);
    console.log("res3",res3);//{name: "Jyoti", age: 24}

    let obj5 = {name:"Sumant",age:26};
    let obj6 = {name:"Jyoti",sex:"Female"};

    let res4 = {...obj5,...obj6};
    console.log("res4",res4);//{name: "Jyoti", age: 26, sex: "Female"}

  }

//   meargingTwoObject();


const arr = [
    {place: "here",  name: "x", other: "other stuff1" },
    {place: "there", name: "x", other: "other stuff2" },
    {place: "here",  name: "y", other: "other stuff4" },
    {place: "here",  name: "z", other: "other stuff5" }
]

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

const arr2 = getUniqueListBy(arr, 'name')

// console.log(JSON.stringify(arr2));

const filterArrayOfObject = (arr) =>{
  let uniq = {};
  const res = arr.filter(obj => !uniq[obj.place] && (uniq[obj.place] = true));
  console.log("res",res);
};

// filterArrayOfObject(arr);

let number = Array.from('1234');
// console.log(number);

const video = {
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(tag);  // we cant acces title without thiskeyword
        })
    }
}

// video.showTags();

function func1() {
    console.log(arguments)
}

// func1(1,2,3,4,5);


function sortString(str){
    var arr = str.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr.join('');
  }

  console.log(sortString("sumant"));
  function sortString1(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
  }

//   console.log(sortString1("sumant chauhan"));


  function removeDuplicateElement(a){
    var result = [];
    a.forEach(function(item) {
     if(result.indexOf(item) < 0) {
         result.push(item);
     }
    });
    return result;
  }

  const uniqueArr = removeDuplicateElement([1,2,1,3,4,2,5,6,7,8,10,2]);
  console.log(uniqueArr);
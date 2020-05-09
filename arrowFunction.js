let log = console.log;


function regularFunction(){
    let that = this;
    name="Sumant";
    this.name1 = "Chauhan";
    // log(name); //Sumant
    // log(name1); //Chauhan
    // log(this.name1)// Chauhan
    function getName(){
        log(name);
        log(that.name1);  
    }

    getName();
}

// let fun1 = new regularFunction();

// log(fun1);

function arroFunction(){
    this.name = "Sumant";
    let arrFunc = () => {
        log(this.name);
    };

    arrFunc();
}

// let fun2 = new arroFunction();
// log(fun2);


function paraChacking(para){
    let stack = [];
    let map = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(let i=0;i<para.length;i++){
        if(para[i] === '(' || para[i] === '[' || para[i] === '{'){
            stack.push(para[i]);
        }else {
            let last = stack.pop();
            if(para[i] !== map[last]) {
                return false;
            };
        }
    }
    if(stack.length !== 0) {
        return false;
    };
    return true;
}

// log(paraChacking('{[]}'));
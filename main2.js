let log = console.log


// log(a);//Uncaught ReferenceError: a is not defined




// log(b); //undefined
// var b;


// log(c);//undefined
// var c = 5;     //initialization is not hoisting


// var d;
// log(d); //undefined


// var e = 5;
// log(e); //5



// log(f); //Uncaught ReferenceError: Cannot access 'f' before initialization
// let f;   //let and const will not hoisting


// let g;
// log(g);//undefined



function aa(){
    log("aa")
}

// aa();//aa
// log(aa); // ƒ aa(){
            // log("aa")
            // }


// log(aa()); //undefined


// bb(); //bb
// log(bb)  // ƒ bb(){
        // log("bb")
        // }

// log(bb()); //bb
              //undefined
function bb(){
    log("bb");
}


// dd(); //ƒ dd() {
        //log(dd);
        //}

function dd() {
    log(dd);
}


// ee(); //ƒ dd() {
         //log(dd);
         //}

function ee() {
    log(dd);
}


// ff(); //undefined
function ff(xyz) {
    log(xyz)//undefined
}

// ff();// undefined


// gg("jsajjsa"); //jsajjsa
function gg(xxx) {
    log(xxx);
}
// log(xxx); //Uncaught ReferenceError: xxx is not defined


function hh() {
    this.aaa=5;
}

// log(aaa); //Uncaught ReferenceError: aaa is not defined


function ii() {
   var bbb=5; 
}

// log(bbb); //Uncaught ReferenceError: bbb is not defined

// log(cc) //undefined
// cc(); //Uncaught TypeError: cc is not a function
// log(cc()); ////Uncaught TypeError: cc is not a function

var cc = function(){
    log("cc");
}

// cc(); // cc








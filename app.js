// console.log('My node app');

// //Global object
//     setTimeout( ()=>{
//         console.log('Delayed');
//     },1000);

//     //run in intervals
//     var time = 0;
//     let timer = setInterval( ()=>{
//         time +=2;
//         console.log(time + ' seconds have passed');
//         if(time > 5){
//             clearInterval(timer);
//         }
//     },2000);

// //Dirname and filename -- node can tell us where we are and what file we are at
//     console.log(__dirname); //like pwd -- tells you directory of current file
//     console.log(__filename); //full file path - incluiding file name in it

        // function callFunction(fun){
        //     fun();
        // }
        // //Function Expressions
        // let sayBye = function(){
        //     console.log('Bye');
        // }

        // callFunction(sayBye);

        
//Modules and require
    //separate diff modules in a separate page

    //require
    // let counter = require('./stuff');
    // console.log(counter(['ben','abu','eliud']));

//module patterns
    //calling several functions from a file export
    let stuff = require('./stuff');

    console.log(stuff.counter(['ben','abu','eliud']));

    console.log(stuff.adder(2,3));

    console.log(stuff.pi);

    console.log(stuff.adder(stuff.pi,3));
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
    // calling several functions from a file export
        // let stuff = require('./stuff');

        // console.log(stuff.counter(['ben','abu','eliud']));

        // console.log(stuff.adder(2,3));

        // console.log(stuff.pi);

        // console.log(stuff.adder(stuff.pi,3));

        // console.log(stuff.multiply(5,4));


//require core modules
    //requiring event module
        //var events = require('events');

    //Event emitter
        // let myEmitter = new events.EventEmitter();

        // myEmitter.on('someEvent', function(msg){
        //     console.log(msg);
        // });

        // myEmitter.emit('someEvent','the event was emitted');

   // let util = require('util'); //inherits certains things from objects used in nodeJS or other modules

    // let Person = function(name){
    //     this.name = name;
    // };
//     var events = require('events');
//     class Person extends events.EventEmitter{
//         constructor(name){
//             super();
//             this.name = name;
//         } 
//     }
//    // util.inherits(Person, events.EventEmitter);

//     let james = new Person('james');
//     let mary = new Person('mary');
//     let ryan = new Person('ryan');

//     let people = [james, mary, ryan];

//     people.forEach(function(person){
//         person.on('speak', function(msg){
//             console.log(person.name + ' said: ' +msg)
//         })
//     })

//     james.emit('speak', 'hey dudes');
//     mary.emit('speak', 'Fuck you');

//Reading and writing files
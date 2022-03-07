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
    //Reading Files
        // let fs = require('fs');

        // let readme = fs.readFileSync('readme.txt', 'utf8');

        //console.log(readme);
    
    //Write files
        //take contents of the file we've read above and copy it contents to another file

        // fs.writeFileSync('writeme.txt', readme);

    //async way of reading and writing files
        //reading files asynchronously requires a callback fxn that is to be called when the read file process completes
            // let fs = require('fs');

            // fs.readFile('readme.txt', 'utf8', function(err, data){
            // console.log(data);
            // })

            // console.log('testing read async');//this will run b4 the file is read
        
        //writing files asynchronously

            // fs.writeFile('writeup.txt','wozzap', function(err, data){
            //     console.log('written to file succesfully');
            // }); // must have a callback fxn coz its assynchronous
            // console.log('testing write async')

//Creating and removing directories
    let fs = require('fs');

    //removing files
        // fs.unlink('delete.txt', function(err){
        //     if(err){
        //         console.log('Something went wrong');
        //     }else{
        //         console.log('deleted');
        //     }
        // }); //requires a callback fxn - can be empty or can confirm whether it went succesfully or not

    //creating a directory
        //fs.mkdirSync('stuff1');
    //removing directories
        //fs.rmdirSync('stuff');

        //creating directories asynchronously 
            // fs.mkdir('stuff2',function(err){
            //     if(err){
            //         console.log('Problem occured creating directory');
            //     }else{
            //         console.log('directory succesfully created');
            //     }
            // });

            //another wholesome example
                // fs.mkdir('stuff3', function(){
                //     fs.readFile('readme.txt', 'utf8', function(err, data){
                //         fs.writeFile('./stuff3/writeme.txt', data, function(){
                //             console.log('directory has been created, file created and contents written to it')
                //         });
                //     });
                // })

            //delete directory async - should be empty to be deleted
            
                lets first delete files in that directory
                fs.unlink('./stuff3/writeme.txt', function(err){
                    if(err){
                        console.log('Error in deleting file');
                    }else{
                        console.log('file deleted');
                    }
                })
                //lets now delete
                fs.rmdir('stuff3', function(err){
                    if(err){
                        console.log('Error occured');
                    }else{
                        console.log('directory deleted');
                    }
                });
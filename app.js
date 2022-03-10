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
    //let fs = require('fs');

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
            
                //lets first delete files in that directory
                // fs.unlink('./stuff3/writeme.txt', function(err){
                //     if(err){
                //         console.log('Error in deleting file');
                //     }else{
                //         console.log('file deleted');
                //     }
                // })
                //lets now delete
                // fs.rmdir('stuff3', function(err){
                //     if(err){
                //         console.log('Error occured');
                //     }else{
                //         console.log('directory deleted');
                //     }
                // });

//Clients and servers
    //creating a server
    // let http = require('http');

    // var server = http.createServer(function(req, res){
    //     console.log('request was made: '+ req.url);

    //     res.writeHead(200, {'Content-Type':'text/plain' });
    //     res.end('Hey Ninjas');
    // });

    // server.listen(3000, '127.0.0.1');

    // console.log('Now listening to port 3000');

//streams and buffers
    //Buffer - is a temporary storage spot for a chunk of data that is being transferred from one place to another. Transfers small chunks of data at a time

    //stream - is a stream of data that flows over time from one place to another
    
    //streams and buffers increase perfomance of our apps

    //Readable streams - allow nodeJS to read data from a stream
// let fs = require('fs');

// let myReadStream = fs.createReadStream(__dirname+'/lorem.txt', 'utf8');

// myReadStream.on('data', function(chunk){
//     console.log('New Chunk Received:');
//     console.log(chunk);
// });

    //Writble streams - allow nodeJS to write/send data to a stream

// let myWriteStream = fs.createWriteStream(__dirname+'/writeStream.txt');

        //Lets now write every chuk thats has been read from above readstream line by line
            // myReadStream.on('data', function(chunk){
            //     console.log('New Chunk Received:');
            //     myWriteStream.write(chunk);
            //     //console.log(chunk);
            // });

    //Duplex - can read and write to a stream

//Pipes - takes data from a read stream and pipes it into a write stream
    // let myReadPipeStream = fs.createReadStream(__dirname+'/readPipe.txt', 'utf8');
    // let myWritePipeStream = fs.createWriteStream(__dirname+'/writePipe.txt');

    // myReadPipeStream.pipe(myWritePipeStream);

    //lets now send data from a redable stream to a user
            // let http = require('http');
            // var server = http.createServer(function(req, res){
            //     console.log('request was made: '+ req.url);

            //     res.writeHead(200, {'Content-Type':'text/plain' });

            //     let myReadPipeStream1 = fs.createReadStream(__dirname+'/readPipe.txt', 'utf8'); //Reading file stream

            //     myReadPipeStream1.pipe(res);
            // });

            // server.listen(3000,'127.0.0.1');

            // console.log('Now listening to port 3000');

//serving html Pages
            // let http = require('http');
            // var server = http.createServer(function(req, res){
            //     console.log('request was made: '+ req.url);

            //     res.writeHead(200, {'Content-Type':'text/html' });

            //     let myReadPipeStream1 = fs.createReadStream(__dirname+'/index.html', 'utf8'); //Reading file stream

            //     myReadPipeStream1.pipe(res);
            // });

            // server.listen(3000,'127.0.0.1');

            // console.log('Now listening to port 3000');

//Serving JSON
            // let http = require('http');
            // var server = http.createServer(function(req, res){
            //     console.log('request was made: '+ req.url);

            //     res.writeHead(200, {'Content-Type':'application/json' });
            //     let myObj = {
            //         name : 'Ben',
            //         job: 'Ninja',
            //         age: 29
            //     };
            //     res.end(JSON.stringify(myObj));
                
            // });

            // server.listen(3000,'127.0.0.1');

            // console.log('Now listening to port 3000');

//Basic Routing
            let fs = require('fs'); 
            let http = require('http');
            var server = http.createServer(function(req, res){
                console.log('request was made: '+ req.url);
                if(req.url === '/home' || req.url === '/'){
                    res.writeHead(200, {'Content-Type':'text/html' });
                    fs.createReadStream(__dirname+'/index.html').pipe(res);
                }else if(req.url === '/contact'){
                    res.writeHead(200, {'Content-Type':'text/html' });
                    fs.createReadStream(__dirname+'/contact.html').pipe(res);
                }else if(req.url === '/api/users/1'){
                    res.writeHead(200, {'Content-Type':'application/json' });
                    newObj = [
                        {
                            name: 'Ben',
                            YOB: '1999-01-31',
                            KCSE_GRADE: 'B (63pts)',
                            marks: 10
                        },
                        {
                            name: 'Abu',
                            YOB: '1997-06-30',
                            KCSE_GRADE: 'B (63pts)',
                            marks: 9
                        },
                        {
                            name: 'Eliud',
                            YOB: '1994-03-27',
                            KCSE_GRADE: 'A- (72pts)',
                            marks: 12
                        }
                    ];
                    res.end(JSON.stringify(newObj));
                }else{
                    res.writeHead(404, {'Content-Type':'text/plain' });
                    res.end('404 error. Page Does Not exist');
                }
            });

            server.listen(3000,'127.0.0.1');

            console.log('Now listening to port 3000');
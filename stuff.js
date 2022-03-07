// let counter = function(arr){
//     return 'There are '+arr.length+ ' elements in this array';
// };

// let adder = function(x,y){
//     return `The sum is ${x+y}`;
// }

// let pi  = 3.142;


// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

    //we can also do:
        // module.exports = {
        //     counter: counter,
        //     adder: adder,
        //     pi: pi,
        // }
        
    // We can also do this
        module.exports.counter = function(arr){
            return 'There are '+arr.length+ ' elements in this array';
        };

        module.exports.adder = function(x,y){
            return `The sum is ${x+y}`;
        }

        module.exports.pi  = 3.1;

        module.exports.multiply = function(ab, cd){
            return ab*cd;
        }

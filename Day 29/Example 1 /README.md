Reading and writing files in NodeJS





Event listeners are similar to call back functions, but are associated with some event. For example, when a server listens to http request on a given port, an event will be generated and to specify http server has received and will invoke corresponding event listener. Basically, Event listeners are also call backs for a corresponding event.




First lets finish off Today 30th June 2017 Topics 

Revise Modules and Http Module

File Modules  -- reading and writing a  file in NodeJS

Dealing with Event Listeners in NodeJS  ---

Stream and Pipes in NodeJS ---  reading data bit by bit and output to some other files ..they are just unix pipes




There are four types of streams:

Readable - For read operation
Writable - For write operation
Duplex - For both read and write operation
Transform - When the output is computed based on the input

Piping in Node

Piping is a mechanism to connect output of one stream to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations.

Chaining in Node

Chaining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.​

Example ---- 

//READING STREAM in NodeJS
var fs=require('fs');

var readableStream =fs.createReadStream('app.js');

var data='';

readableStream.setEncoding('UTF8');
readableStream.on('data',function(chunk){


data+=chunk;
});

readableStream.on('end',function(){


//console.log(data);
})

//READING STREAM in NodeJS


//Writing Stream in NodeJS

var writeData='Hello World';

var writableStream = fs.createWriteStream('output.txt');
writableStream.write(writeData,'UTF8');
writableStream.end();
writableStream.on('finish',function(){

console.log("Write Completed");

})

//Writing Stream in NodeJS

/*

n piping.
 Piping is a mechanism in which you can read data from source and then 
 write it into a destination without having to manage anything in between

*/​





Router in NodeJS 







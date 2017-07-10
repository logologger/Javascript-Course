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

https://www.sitepoint.com/basics-node-js-streams/​


 
var http = require('http'),
    url = require('url');
    
var routes = { 
    get: function (route, fn) {
        this['GET:' + route] = fn;
    },
    post: function (route, fn) {
        this['POST:' + route] = fn;
    }
};

routes.get('/', function (req, res) {
	res.writeHeader(200, {'Content-type': 'text/html'});
    res.write('<h1>Home</h1>');
    res.end();
});

routes.get('/about', function (req, res) {
	res.writeHeader(200, {'Content-type': 'text/html'});
    res.write('<h1>About</h1>');
    res.end();
});

routes.get('/contact', function (req, res) {
	res.writeHeader(200, {'Content-type': 'text/html'});
    res.write('<h1>Contact</h1>');
    res.end();
});

function onRequest(req, res) {
    var purl = url.parse(req.url);
    var pathname = purl.pathname;
    console.log(pathname);
    
    var key = req.method + ':' + pathname;
    
    console.dir(key);
    
    if (typeof routes[key] === 'function')
        routes[key](req, res);
    else {
        res.writeHeader(404);
        res.end();
    }
}

var server = http.createServer(onRequest);

server.listen(3000);

console.log("Server listening on port 3000");

​






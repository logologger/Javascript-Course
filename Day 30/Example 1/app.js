var http = require('http');

var url = require('url'); //CommonJS Module

var fs = require('fs');

var routes = {

    get: function(route, fn) { //fn is a callback function
        this['GET:' + route] = fn; //GET:about ..assigning this to function
    },
    post: function(route, fn) {
        this['POST:' + route] = fn;

    }

};

//ExpressJS ...MEAN Stack --- MongoDB ExpressJS Angular NodeJS

routes.get('/', function(req, res) {

    res.writeHeader(200, { 'Content-type': 'text/html' });
    fs.readFile("input.txt", function(err, data) {

        if (err) { //First always handle the Error
            console.log("Error in reading File");
            return;
        }


        console.log(data.toString());
        res.write(data.toString());
        res.end();


    });

});

routes.get('/about', function(req, res) {

    res.writeHeader(200, { 'Content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
});

routes.get('/contact', function(req, res) {

    res.writeHeader(200, { 'Content-type': 'text/html' });
    res.write('<h1>Contact Page</h1>');
    res.end();
});


function onRequest(req, res) {


    var purl = url.parse(req.url);
    console.log(purl);
    var pathname = purl.pathname;
    console.log("path name " + pathname);


    var key = req.method + ":" + pathname; //GET:about

    if (typeof routes[key] === 'function') {

        routes[key](req, res);

    } else {
        res.writeHeader(404);
        res.end();
    }

}

var server = http.createServer(onRequest);

server.listen(1234);

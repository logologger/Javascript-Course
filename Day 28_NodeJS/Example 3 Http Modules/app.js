var http=require('http');

http.createServer(function(req,res){

	console.log("Server running on port no. 7000");
	res.writeHead(200,{"Content-type":"text/html"})
	res.write("<h2>Hello Browser This is my first nodeJS</h2>");
	res.end();


}).listen(1234);
var http = require('http');

http.createServer(hello).listen(3030);

function hello(req,res) {
	res.end('<h1>hello techEd brasil!</h1>');
}
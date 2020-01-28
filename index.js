const http = require('http');

const server = http.createServer(function(req, res){
    res.setHeader("Content-type", "application/json");
    res.setHeader("Acces-Control-Allow-Origin", "*");
    res.writeHead(200); //HTTP 200
    let dataObj = {"id":123, "name":"Denizhan", "email":"denizhan@gmail.com"};
    let data = JSON.stringify(dataObj);
    res.end(data);
});

server.listen("1234",function(){
    console.log("Listening Port 1234");
});
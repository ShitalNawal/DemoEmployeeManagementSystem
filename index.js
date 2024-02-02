const http = require("http");
const { request } = require("https");


const server = http.createServer((request,Response,next)=>{

res.end("working");
})
server.listen(4000,"localhost",()=>{
console.log("server is working on http://localhost:4000");
});


// const http=require('http');
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application/json'});
//     resp.write(JSON.stringify([
//         {name:"virat kohli",city:"delhi"},
//         {name:"rohit sharma",city:"mumbai"},
//         {name:"shubhman gill",city:"mohali"}]));
//     resp.end();
// }).listen(3001);


const express=require('express');
const app=express();
app.get('/',(req,resp)=>{
    resp.send("Hello this is home page");
})
app.get('/about',(req,resp)=>{
    resp.send("This is about page");
})
app.listen(3005);

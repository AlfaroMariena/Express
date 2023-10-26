const http=require('http');

const server=http.createServer((req,res)=>{
    res.status=200;
    res.end('Hola a todos los geis del mundo en especial a KALET QUE ME CAE MAL ');

});

server.listen(3000,()=>{
    console.log('Server on port 3000');
});

 

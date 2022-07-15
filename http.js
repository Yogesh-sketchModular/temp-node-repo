const http=require('http');

const server=http.createServer((req,res)=>{

    if(req.url==='/')
    {
        res.end("Welcome to home Page");
    }
    if(req.url==='/about')
    {
        res.end("Hi these the app name called about");
    }
    res.end(
        `<h1>OOPS!!!</h1>
        <p>Sorry these page is not available</p> `
    )
});
server.listen(5000);
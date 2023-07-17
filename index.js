//importing express
const express = require('express');
//using the functionality of app
const app = express();
const port = 8000;







//running the server on port 8000
app.listen(port,function(err){
    if(err){
        console.log('error in running the server:',err);
    }
    console.log('Server is running on port:',port);
})
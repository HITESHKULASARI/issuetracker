//importing express
const express = require('express');
//using the functionality of app
const app = express();
const port = 8000;
//we got our library through this
//we have to tell our app or server to use it before we required our route because that routes views are going to render 
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
//extract style and script from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.static('./assets'));

app.use('/',require('./routes'));

//setting up ejs
app.set('view engine','ejs');
app.set('views','./views');







//running the server on port 8000
app.listen(port,function(err){
    if(err){
        console.log('error in running the server:',err);
    }
    console.log('Server is running on port:',port);
})
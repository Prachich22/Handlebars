const express = require('express');
//for using path
const path = require('path');
//constant for storing express 's functions
const app = express();
//local port
//const port = 8000
//hosting port
const port = process.env.PORT || 8000 ;
//static website with public path
//console.log(path.join(__dirname,"../public"));
const static_path = path.join(__dirname,"../public");
//partials file ko call ke liye path
const template_path = path.join(__dirname,"../templates/views");
//partial ki registered file ke liye 
const partials_path = path.join(__dirname,"../templates/partials");
//hbs require
const hbs = require('hbs');
//express template engine
//app.set('views', '../views');
app.set('view engine', 'hbs');
//partials ko use after renaming file
app.set('views',template_path);
app.use(express.static(static_path));
//hbs ne partials ko register kr liya h 
hbs.registerPartials(partials_path);
//routing
app.get("/",(req,res)=>{
//res.send("welcome on home page");
res.render('index');
});
//about page
app.get("/about",(req,res)=>{
    //send method use hota h get method ke sath
   // res.send("welcome on aboutus page");
   //now use hbs so use render method
   res.render('about');
    });
    //weather page
    app.get("/weather",(req,res)=>{
       // res.send("welcome on weather page");
        //res.render('welcome on weather channel');
        res.render('weather');
        });
        //wrong page
        app.get("*",(req,res)=>{
            //res.send("404 error page oops!");
            //res.render("404 error page oops!");
            //partials file ko call
            res.render('404error',{
                errorMsg:'oops! page not found'
            });
            });
//listening port
app.listen(port,()=>{
console.log(`listening to the port at ${port}`);
});

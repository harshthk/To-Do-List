const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items= ["Drink Water", "Chanting", "Read book"];
let workitem = [];

app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){



    // Local date string is used display the date
    // const todaydate = new Date();
    // let options = {
    //     weekday : "long",
    //     day : "numeric",
    //     month: "long",
    //     year: "numeric"
    // };
    // let day = todaydate.toLocaleDateString("en-US", options);
    // console.log(todaydate);
    // console.log(day);

    let day = date.getDate();
     res.render("list", {listtitle:  day, newitems: items});


    // Here normal date function is used to display the date 
    // and here i used string instead of switch case

    // const todaydate = new Date().getDay(); 

    // const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]; 

    // if(todaydate == 6 || todaydate == 0){
        // res.sendFile(__dirname+ "/weekend.html");
        // res.send("<h1>Yepp today is " + day[todaydate] + " weekend enjoy your day</h1>");
        // console.log(__dirname + "/weekend.html");
        // res.render("list", {kindofday:  day[todaydate]});
        
        // res.render("list", {kindofday:  day});
    // }else{
        // res.send("<h1>Today is " + day[todaydate] + ". So please concentrate on your work.</h1>");
        // res.sendFile(__dirname + "/weekday.html");
        // res.render("list", {kindofday:  day[todaydate]});
        // res.render("list", {kindofday:  day});
    // }
    
    // console.log("Today is "+ day[todaydate]+".");
});

app.get("/work", function(req,res){
    res.render("list", {listtitle: "work", newitems: workitem});
})


app.post("/",function(req, res){
    console.log(req.body);
    let item = req.body.newitem;

    if(req.body.list === "work "){
        workitem.push(item);
        res.redirect("/work");  
    }else{
        items.push(item);
        res.redirect("/"); 
    }

    items.push(item);

    // res.render("list",{newlist: item});
    res.redirect("/");  
});

app.post("/work",function(req, res){
    let item = req.body.newitem;
    workitem.push(item);
    console.log(req.body.newitem);
    // res.render("list",{newlist: item});
    res.redirect("/work");  
});

app.listen(3000, function(req,res){
    console.log("Server started on port number 3000");
});
const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();

let items = [];
let workItems=[];
let HomeItems=[];
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", function(req,res){
    let day = date.getDate();
    res.render("list", {listTitle: day, newListItem: items });
})
app.get("/work", function(req,res){
    res.render("list", {listTitle: "WorkList", newListItem: workItems});
});
app.get("/home",function(req,res){
    res.render("list", {listTitle: "Home", newListItem: HomeItems});
})
app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.list==="WorkList"){
        workItems.push(item);
        res.redirect("/work");
    }
    else if(req.body.list==="Home")
    {
        HomeItems.push(item);
        res.redirect("/home");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    //res.send(x1);  
});



app.get("/about", function(req, res){
    res.render("about");
})
app.listen(3000, function(){
    console.log("Server started on port 3000");
})
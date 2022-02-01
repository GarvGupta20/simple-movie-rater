//jshint esversion:6
const express=require("express");
const bodyparser=require("body-parser");
const axios=require("axios");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/", (req,res) => {
  res.sendFile(__dirname+"/index.html");
});
app.post("/",(req,res) => {
     const movie=req.body.movie[1];
     const m=axios.get(" http://www.omdbapi.com/?t=" + movie +"&apikey=ad2af4bb")
         .then((response) => {
           res.send("<h1>"+response.data.imdbRating+"</h1>");
         }).catch(error => {
           console.log(error);
         });
  });

                                                       // console.log(req.body); after this our body is processed like this { crypto: 'eth', fiat: 'gbp', submit: '' }
                                                       // using this whole code we can exploit our currency and print the desired currency
app.listen(3000, (err) => {
  if(err) {
    console.log("your server cant be setup");
  }
  else {
    console.log("your server is set my lord");
  }
});

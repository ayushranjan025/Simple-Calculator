const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let sum = num1 + num2;

    res.send("Sum is" + sum);
});

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
    let mass = parseFloat(req.body.mass);
    let height = parseFloat(req.body.height);

    let bmi = mass / (height * height);

    res.send("BMI is " + bmi);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
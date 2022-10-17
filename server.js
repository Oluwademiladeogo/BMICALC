const express = require("express");
const https = require("https");
// var bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.post("/", function(req, res) {
	var h1 = Number(req.body.height);
	var w1 = Number(req.body.weight);
	var result = w1 /(h1*h1);
	res.send("Your BMI is " + result);
})
port = process.env.PORT || 3000
app.listen(port, () =>{
 console.log(`server is running on port ${port}`);
});


const express = require("express");
const https = require("https")
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');


app.get("/", function(req, res){

	const clock_url = "https://worldtimeapi.org/api/ip"

	https.get(clock_url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
        const clockData = JSON.parse(data)
        const clockTime = clockData.datetime
		const location = clockData.timezone

			function padTo2Digits(num) {
  				return String(num).padStart(2, '0');
			}

		const date = new Date(clockTime);
		const newTime = padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());

		// console.log(date)


	res.render("index", {
		displayTime: newTime,
		displayLocation: location
	});

	});

	});

	});


app.listen(3000, function(){
	console.log("Server initiated on port 3000");
})
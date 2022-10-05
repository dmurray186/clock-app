
const express = require("express");
const https = require("https")
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/x", function(req, res){
	res.sendFile(__dirname + "/views/index.html")
});

app.get("/", function(req, res){

	const quotes_url = "https://zenquotes.io/api/random"

	https.get(quotes_url, function(response){
		console.log("Quotes: " + response.statusCode);

		response.on("data", function(data) {
			const quotesData = JSON.parse(data)
			const quote = quotesData[0].q
			const author = quotesData[0].a

	const clock_url = "https://worldtimeapi.org/api/ip"

	https.get(clock_url, function(response){
      console.log(response.statusCode);

      response.on("data", function(data){
        const clockData = JSON.parse(data)
        const clockTime = clockData.datetime
				const location = clockData.timezone
				const abbreviation = clockData.abbreviation
				const dayOfWeek = clockData.day_of_week
				const dayOfYear = clockData.day_of_year
				const weekNumber = clockData.week_number

					function padTo2Digits(num) {
  					return String(num).padStart(2, '0');
					}

					const date = new Date(clockTime);
					const newTime = padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());

					const city = location.substring(location.indexOf("/") + 1)
					const country = location.substring(0, location.indexOf("/"))
					const newLocation = city + ", " + country;

				res.render("index", {
					displayTime: newTime,
					displayAbb: abbreviation,
					displayLocation: newLocation,
					displayQuote: quote,
					displayAuthor: author,
					displayZone: location,
					displayDayWeek: dayOfWeek,
					displayDayYear: dayOfYear,
					displayWeekNumber: weekNumber
		 		});

			});
	 });
	});
 });
});




app.listen(3000, function(){
	console.log("Server initiated on port 3000");
})

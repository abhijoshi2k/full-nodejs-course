const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	var amount = req.body.amount;
	var crypto = req.body.crypto;
	var fiat = req.body.fiat;

	var options = {
		url: "https://apiv2.bitcoinaverage.com/convert/global",
		method: "GET",
		qs: {
			from: crypto,
			to: fiat,
			amount: amount
		}
	}

	request(options, (error , response, body) => {
		console.log(body);
		//abandoned as it isn't free anymore. But, in year 2018, we used to get the JSON in console!
	});

	res.sendFile(__dirname + "/index.html");
});


app.listen(3000, () => {
	console.log('Listening to port 3000');
})
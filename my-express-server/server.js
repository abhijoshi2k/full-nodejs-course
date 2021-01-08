const express = require('express');
const app = express();

app.get("/", (req,res) => {
	res.send('<h1>Hello World</h1>');
});

app.get("/contact", (req,res) => {
	res.send('<h1>Contact</h1>');
})

app.get("/about", (req,res) => {
	res.send('<h1>About</h1>');
})

app.get("/hobbies", (req,res) => {
	res.send('<h1>Hobbies</h1>');
})

app.listen(3000, () => {console.log('Listening to port 3000');});
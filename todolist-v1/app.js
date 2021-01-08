const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date');

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {

	const day = date.getDate();

	console.log(date.getDay());

	res.render('list', {listTitle: day, listItems: items});

});

app.post("/", (req,res) => {

	const item = req.body.newItem;

	if(req.body.list === "Work List")
	{
		workItems.push(item);
		res.redirect("/work");
	}
	else
	{
		items.push(item);
		res.redirect("/");
	}

});

app.get("/work", (req,res) => {

	res.render('list', {listTitle: "Work List", listItems: workItems});

});

app.post("/work", (req,res) => {

	const item = req.body.newItem;

	workItems.push(item);

	res.redirect("/work");

});

app.get("/about", (req,res) => {

	res.render('about');

});


app.listen(process.env.PORT || 3000, () => {
	console.log('Listening to port 3000');
});
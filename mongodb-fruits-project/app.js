const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data. No name given"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);



const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  rating: 6,
  review: "Descent fruit."
});

mango.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango}, (err) => {

  mongoose.connection.close();

  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log('Successfully updated the document');
  }
});
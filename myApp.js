require('dotenv').config();
var mongoose = require('mongoose');
mongooseURI = process.env.MONGO_URI;
mongoose.connect(mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true });

  const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema); 

const db = mongoose.connection; //https://mongoosejs.com/docs/index.html


/*db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

  const kittySchema = new mongoose.Schema({
    name: { type: String, required: true },
    personality: String // String is shorthand for {type: String}
  });
  kittySchema.add({ color: 'string', age: 'number' });
  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }
  const Kitten = mongoose.model('Kitten', kittySchema);

  const fluffy = new Kitten({ name: 'fluffy' });
  fluffy.speak(); // "Meow name is fluffy"

 /* fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });


  /*
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })
  Kitten.find({ name: /^fluff/ }, callback);

 
});
 */
//let Person;

const createAndSavePerson = (done) => {
  const jim = new Person({name: 'Jim', age: 25, favoriteFoods: ["Apples", "Walnuts"]});
  jim.save(function (err, data){
    if (err) return console.error(err);
    done(null, data);
  });
};
/*
arrayOfPeople = [{name: 'Jimmy', age: 35, favoriteFoods: ["Bread", "Sausage"]}, {name: 'Kim', age: 22, favoriteFoods: ["Tumeric", "Quinoa"]}, {name: 'Pim', age: 45, favoriteFoods: ["Raisins", "Peanuts"]}];
*/
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err,data){
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err,data){
    if (err) return console.error(err);
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, data){
    if (err) return console.error(err);
    console.log(food);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

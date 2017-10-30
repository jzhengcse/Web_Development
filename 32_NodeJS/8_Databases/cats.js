var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String,
});

var Cat = mongoose.model("Cat", catSchema);


//adding a new cat to the DB
// var george=new Cat({
//     name: "Mrs. norris",
//     age: 7,
//     temperament: "Evil"
// });
//
// george.save(function(err, cat){
//     if(err) {
//         console.log("error");
//     }  else {
//         console.log("save a cat");
//         console.log(cat)
//     }
// });


Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
   if(err) {
       console.log(err);
   } else {
       console.log(cat);
   }
});

// retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
   if(err) {
       console.log("OH no");
       console.log(err);
   } else {
       console.log("All cats");
       console.log(cats);
   }
});
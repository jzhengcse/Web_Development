var mongoose = require("mongoose");
var Campground=require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest A",
        image: "http://digitalspyuk.cdnds.net/17/34/1600x800/landscape-1503405223-whitewalkers1.jpg",
        description: "Spare ribs doner picanha bacon pork belly chuck cow. Meatloaf cupim hamburger doner, strip steak flank bacon sirloin short loin corned beef andouille biltong venison fatback bresaola. Andouille beef ribs tail ham hock. Chuck burgdoggen capicola ham hock. Pork meatloaf bresaola salami chicken jerky ham meatball turducken ball tip fatback ground round. Pork chop rump bresaola corned beef, bacon turkey chicken drumstick jerky picanha filet mignon pork belly venison fatback doner. Porchetta tri-tip brisket sausage ground round biltong strip steak turducken chuck."
    },
    {
        name: "Cloud's Rest B",
        image: "http://digitalspyuk.cdnds.net/17/34/1600x800/landscape-1503405223-whitewalkers1.jpg",
        description: "Spare ribs doner picanha bacon pork belly chuck cow. Meatloaf cupim hamburger doner, strip steak flank bacon sirloin short loin corned beef andouille biltong venison fatback bresaola. Andouille beef ribs tail ham hock. Chuck burgdoggen capicola ham hock. Pork meatloaf bresaola salami chicken jerky ham meatball turducken ball tip fatback ground round. Pork chop rump bresaola corned beef, bacon turkey chicken drumstick jerky picanha filet mignon pork belly venison fatback doner. Porchetta tri-tip brisket sausage ground round biltong strip steak turducken chuck."
    },
    {
        name: "Cloud's Rest C",
        image: "http://digitalspyuk.cdnds.net/17/34/1600x800/landscape-1503405223-whitewalkers1.jpg",
        description: "Spare ribs doner picanha bacon pork belly chuck cow. Meatloaf cupim hamburger doner, strip steak flank bacon sirloin short loin corned beef andouille biltong venison fatback bresaola. Andouille beef ribs tail ham hock. Chuck burgdoggen capicola ham hock. Pork meatloaf bresaola salami chicken jerky ham meatball turducken ball tip fatback ground round. Pork chop rump bresaola corned beef, bacon turkey chicken drumstick jerky picanha filet mignon pork belly venison fatback doner. Porchetta tri-tip brisket sausage ground round biltong strip steak turducken chuck."
    },
]

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        // if(err) {
        //     console.log(err)
        // } else {
        //     console.log("removed campgrounds!");
        //     // add a few campgrounds
        //     data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground) {
        //             if(err) {
        //                 console.log(err)
        //             } else {
        //                 console.log("added a campground");
        //                 // create a comment
        //                 Comment.create({
        //                     text: "This place is great",
        //                     author: "Homer"
        //                 }, function(err, comment) {
        //                     if(err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //
        //                 })
        //             }
        //         })
        //     })
        // }
    });
}


module.exports=seedDB;


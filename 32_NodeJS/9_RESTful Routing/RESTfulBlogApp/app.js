var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var expressSanitizer=require("express-sanitizer");

// App config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({exteded: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Mongoose model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_960_720.jpg",
//     body: "This is a blog post"
// });
// Restful Routes
app.get("/", function (req, res) {
    res.redirect("/blogs");
});


// Index Route
app.get("/blogs", function (req, res) {

    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// New Route
app.get("/blogs/new", function (req, res) {
    res.render("new");
});

// Create Route
app.post("/blogs", function (req, res) {
    // create blog
    console.log(req.body);
    req.body.blog.body=req.sanitize(req.body.blog.body)
    console.log(req.body);

    Blog.create(req.body.blog, function (err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            // then, redirect to the index
            res.redirect("/blogs");
        }
    })
});

// Show Route
app.get("/blogs/:id", function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// Edit Route
app.get("/blogs/:id/edit", function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    })
});

// Update Route
app.put("/blogs/:id", function (req, res) {
    req.body.blog.body=req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog,function(err, updateBlog){
        if(err) {
            res.redirect("/blogs")
        } else {
            res.redirect("/blogs/"+req.params.id);
        }
    });
});

// Delete Route
app.delete("/blogs/:id", function(req, res){

    // destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
       if(err) {
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs");
       }
    });
});

app.listen(8000, 'localhost', function () {
    console.log("Server started");
});

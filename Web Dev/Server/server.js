var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Student = require('./api/models/studentModel'), //created model loading here
  bodyParser = require('body-parser');

var validator = require("validator");
var emailValidator = require("email-validator");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/StudentsDB',{ useNewUrlParser: true });

mongoose.connect("mongodb://dsfa:R0xKWtINF9er2u5RuDipA1PFMuBj7dAzAxl2Bxxid8TkQ0nLf5mSbKrLDrjpqLN0sp0JnfZMXj4XqFkzmS7wUQ%3D%3D@dsfa.documents.azure.com:10255/MainDB?ssl=true", { useNewUrlParser: true });

//error handling
mongoose.connection.on('error', err => {
  console.log(err.message);
});


//form will be parsed to the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//input validation
app.use((req, res, next) => {

    //blacklist of unwanted character
    const blackList = "{}():;\\\\";
    var email = req.body.email;

    //request body validation
    for(var input in req.body) {

      //input sanitizaztion
      if(input != "password" && typeof req.body[input] == "string")
        req.body[input] = validator.blacklist(req.body[input], blackList);

      //checking for empty values
      if(typeof req.body[input] == "string" && req.body[input].trim() == "")
        req.body[input] = req.body[input].trim();
    }

    //if email was sanitized, throw an error
    if(email != req.body.email){
      next(new Error("Unacceptable Email Format"));
    }

    //email validation
    if(req.body.email && !validator.isEmail(req.body.email)  ){
        next(new Error('Invalid email format.'));
    }

     //sanitize the student id from the url
     if(req.params.studentId)
      req.params.studentId = validator.blacklist(req.params.studentId, blackList);

    //go to the next middleware
    next();
});

//importing route
var routes = require('./api/routes/studentRoutes');
//register the route
routes(app);


app.listen(port);


console.log('Students RESTful API server started on: ' + port);

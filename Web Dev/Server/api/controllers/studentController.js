'use strict';

const bcrypt = require('bcrypt');

var mongoose = require('mongoose'),
  Student = mongoose.model('Students');

exports.list_all_students = function(req, res) {
  Student.find({}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};

exports.insert_student = function(req, res) {
  //if password is not empty, hash the password
  if(req.body.password.trim() != ""){
    let hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;
  }

  var new_student = new Student(req.body);
  new_student.save(function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });

};

exports.view_student = function(req, res) {
  Student.findById(req.params.studentId, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};

exports.update_student = function(req, res) {
  Student.findOneAndUpdate({_id: req.params.studentId}, req.body, {new: false}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};

exports.delete_student = function(req, res) {
  Student.remove({
    _id: req.params.studentId
  }, function(err, student) {
    if (err)
      res.send(err);
    res.json({ message: 'Student successfully deleted' });
  });
};

exports.log_in = function(req, res) {

  Student.findOne({email: req.body.email},{new: false}, function (err, doc) {
    if (err)
      res.send(err);

    if(doc){
      bcrypt.compare(req.body.password, doc.password, function(err2, resp) {

        if(resp) {

           // Passwords match
           Student.findOneAndUpdate({email: req.body.email}, { lastLoggedInDate: new Date() } , {new: false} , function(err3, student) {
             if (err3)
               res.send(err3);
             res.json({ message: 'Student successfully logged in.' });
           });

        } else {
          res.send("Login failed: email or password is incorrect.", 404)
        }

      });
    } else {
      res.send("Login failed: email does not exist.", 404);
    }


  });

};

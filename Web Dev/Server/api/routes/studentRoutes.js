'use strict';
module.exports = function(app) {
  var students = require('../controllers/studentController');

  // Students Routes
  app.route('/students')
    .get(students.list_all_students)
    .post(students.insert_student);

  app.route('/login')
    .post(students.log_in);

  app.route('/students/:studentId')
    .get(students.view_student)
    .put(students.update_student)
    .delete(students.delete_student);

};

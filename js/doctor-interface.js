var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  var doctor = new Doctor();
  $('#doctorForm').submit(function() {
   event.preventDefault();
   var medicalIssue = $('#medicalIssue').val();
   doctor.getDoctors(medicalIssue);
  });
});

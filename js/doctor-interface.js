var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, doctors) {
  doctors.forEach(function(doctor){
    $('.showDoctors').append("<p>" + doctor.profile + "</p>");
  });
};

$(document).ready(function() {
  var doctor = new Doctor();
    $('#doctorForm').submit(function() {
      event.preventDefault();
      var medicalIssue = $('#medicalIssue').val();
      $('#medicalIssue').val("");
      doctor.getDoctors(medicalIssue, displayDoctors);
  });
});

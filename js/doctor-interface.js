var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, doctors) {
  console.log(medicalIssue);
  if ((doctors.length > 0) && (medicalIssue !== "")) {
    doctors.forEach(function(doctor){
      $('.showDoctors').append("<p>" + doctor.profile.first_name + " " + doctor.profile.last_name + "</p>");
    });
  } else {
    $('.showDoctors').append("<p>Sorry there no doctor near by for that ailment</p>");
  }
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

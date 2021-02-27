console.log("am i linked");
$(document).ready(() => {
    // Getting references to our form and input
    const patientForm = $("form.patient-form");
    const patientFirstName = $("input#patient_First_name")
    const patientLastName = $("input#patient_Last_name")
    const address = $("input#patient_Address")
  
    // When the signup button is clicked, we validate the email and password are not blank
    // const patientForm = document.getElementById("submit");
    patientForm.on("submit", event => {

      event.preventDefault();
      const patientData = {
        
        patient_First_name: patientFirstName.val().trim(),
        patient_Last_name: patientLastName.val().trim(),
        patient_Address: address.val().trim(),
      
      };
  console.log('patientData',patientData);
      if (!patientData.patient_First_name || !patientData.patient_Last_name || !patientData.patient_Address) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpPatient(patientData.patient_First_name, patientData.patient_Last_name, patientData.patient_Address);
      patientFirstName.val("");
      patientLastName.val("");
      address.val("");
      console.log('signUpPatient');
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpPatient(firstName, lastName, address) {
console.log(firstName, lastName, address);
    // Confused which api post should be
      $.post("/api/patient", {
        patient_First_name: firstName,
        patient_Last_name: lastName,
        patient_Address: address
      })
      .done(function() {
        window.location.replace("/members");
        alert( "second success" );
      })
      .fail(function(err) {
        console.log(err);
        alert( "error" );
      })
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  
  
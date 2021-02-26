$(document).ready(() => {
    // Getting references to our form and input
    const patientForm = $("form.patient-form");
    const patientFirstName = $("input#patient_First_name")
    const patientLastName = $("input#patient_last_name")
    const address = $("input#patient_Address")
  
    // When the signup button is clicked, we validate the email and password are not blank
    patientForm.on("submit", event => {
      event.preventDefault();
      const patientData = {
        patient_First_name: patientFirstName.val().trim(),
        patient_last_name: patientLastName.val().trim(),
        patient_Address: address
      
      };
  
      if (!patientData.patientFirstName || ! patientData.patientLastName || patientData.address) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUppatient(patientData.patient_First_name, patientData.patient_last_name, patientData.patient_Address);
      patientFirstName.val("");
      patientLastName.val("");
      address.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUppatient(firstName, lastName, address) {

    // Confused which api post should be
      $.post("/api/patient-signup", {
        patient_First_name: firstName,
        patient_last_name: lastName,
        patient_Address: address
      })
        .then(() => {
          window.location.replace("/appointments");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  

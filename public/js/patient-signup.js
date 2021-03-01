console.log("am i linked");
$(document).ready(() => {
    // Getting references to our form and input
    const patientForm = $("form.patient-form");
    const patientFirstName = $("input#patient_First_name")
    const patientLastName = $("input#patient_Last_name")
    const address = $("input#patient_Address")
    const patientEmail = $("input#patient-email")
    const patientNeeds = $("input#patient-medical-needs")
    const patientInsurance = $("#insurance")
    const monday = $('#monday')
    const tuesday = $('#tuesday')
    const wednesday = $('#wednesday')
    const thursday = $('#thursday')
    const friday= $('#friday')
    const saturday = $('#saturday')
    const sunday = $('#sunday')

    

      patientForm.on("submit", event => {

      event.preventDefault();
      const patientData = {
        
        patient_First_name: patientFirstName.val().trim(),
        patient_Last_name: patientLastName.val().trim(),
        patient_Address: address.val().trim(),
        email: patientEmail.val().trim(),
        medical_needs: patientNeeds.val().trim(),
        insurance_Type: patientInsurance.val(),
        monday: monday.val(),
        tuesday: tuesday.val(),
        wednesday: wednesday.val(),
        thursday: thursday.val(),
        friday: friday.val(),
        saturday: saturday.val(),
        sunday: sunday.val(),

      
      };
  console.log('patientData',patientData);
      if (!patientData.patient_First_name || !patientData.patient_Last_name || !patientData.patient_Address) {
        return;
      }
      signUpPatient(patientData.patient_First_name, patientData.patient_Last_name, patientData.patient_Address, patientData.email, patientData.medical_needs, patientData.insurance_Type, patientData.monday, patientData.tuesday, patientData.wednesday, patientData.thursday, patientData.friday, patientData.saturday, patientData.sunday);
      patientFirstName.val("");
      patientLastName.val("");
      address.val("");
      patientEmail.val("");
      patientNeeds.val("");
      patientInsurance.val(true);
      monday.val(false);
      tuesday.val(false);
      wednesday.val(false);
      thursday.val(false);
      friday.val(false);
      saturday.val(false);
      sunday.val(false);

      console.log('signUpPatient');
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpPatient(firstName, lastName, address, email, medicalNeeds, insurance, monday, tuesday, wednesday,thursday,friday,saturday,sunday ) {
console.log(firstName, lastName, address, insurance, medicalNeeds, monday, tuesday, wednesday,thursday,friday,saturday,sunday);
    // Confused which api post should be
      $.post("/api/patient", {
        patient_First_name: firstName,
        patient_Last_name: lastName,
        patient_Address: address,
        email: email,
        medical_needs: medicalNeeds,
        insurance_Type: insurance,
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday,

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
  
  
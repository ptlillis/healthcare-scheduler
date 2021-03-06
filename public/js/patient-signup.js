// 

  console.log("I'm linked");

// }
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

    
//creating event listener for patient form submit
      patientForm.on("submit", event => {

      event.preventDefault();
      //object to assign key-values
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
  //validate that patient has submitted important information
      if (!patientData.patient_First_name || !patientData.patient_Last_name || !patientData.patient_Address) {
        return;
      }
     
      // invoke signupPatient function with argument values passed in
      signUpPatient(patientData.patient_First_name, patientData.patient_Last_name, patientData.patient_Address, patientData.email, patientData.medical_needs, patientData.insurance_Type, patientData.monday, patientData.tuesday, patientData.wednesday, patientData.thursday, patientData.friday, patientData.saturday, patientData.sunday);
      //clears patient input (may not be necessary)
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

      
    });
    // Function to get appointment information from database and display it on an appointment card
    function getPatient() {
      $.get("/api/test", function( data ) {
        alert("test")
        //assign variables to Appointment data values
        var appointmentNumber = data[0].appointment_id;
        var patientName = `${data[0].patient_First_name} ${data[0].patient_Last_name}`;
        var providerName = `${data[0].provider_First_name} ${data[0].provider_last_name}`;
        var patientAddress = data[0].patient_Address;
        var providerEmail = `Provider Contact Email: ${data[0].email}`;
        var mondayInput = data[0].monday;
        var tuesdayInput = data[0].tuesday;
        var wednesdayInput = data[0].wednesday;
        var thursdayInput = data[0].thursday;
        var fridayInput = data[0].friday;
        var saturdayInput = data[0].saturday;
        var sundayInput = data[0].sunday;

        // change dom to display patient's appointment information
        $("#patient-signup-display").addClass("hidden");
        $("#appointment-page-display").removeClass("hidden");
        $("#appointment-id").text(appointmentNumber);
        $("#patient-name").text(patientName);
        $("#provider-name").text(providerName);
        $("#patient-address").text(data[0].patient_Address);
        $("#provider-email").text(providerEmail);

          // if statements to display only days where service provided
        if (mondayInput === true)  {
          $("#app-monday").removeClass("hidden")
        }
        else {}

        if (tuesdayInput === true) {
          $("#app-tuesday").removeClass("hidden")}
        else{} 
        if (wednesdayInput === true) {
          $("#app-wednesday").removeClass("hidden")}
        else{} 
        if (thursdayInput === true) {
        $("#app-thursday").removeClass("hidden")
        }
        else {}
        if (fridayInput === true) {
        $("#app-friday").removeClass("hidden")
        }
        else {}
        if  (saturdayInput === true){
          $("#app-saturday").removeClass("hidden")
        }

        else {}
        if (sundayInput === true ){
          $("#app-sunday").removeClass("hidden")
        }
        else{}      

      });
    }




    // define signupPatient function
    function signUpPatient(firstName, lastName, address, email, medicalNeeds, insurance, monday, tuesday, wednesday,thursday,friday,saturday,sunday ) {
console.log(firstName, lastName, address, insurance, medicalNeeds, monday, tuesday, wednesday,thursday,friday,saturday,sunday);

    // Sends data to the patient database
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
        // window.location.replace("/appointment");
        alert( "second success" );
        getPatient()
      })
      .fail(function(err) {
        console.log(err);
        alert( "error" );
      })
    }
  
    // TUTORING HELP:  1) ON Patient API routes line app.delete 104, there's a delete, confirm if this is in the right place
    
    // $( "#cancel-appointment" ).click(function() {

    //   $.remove("/api/patient", {
    //     patient_First_name: firstName,
    //     patient_Last_name: lastName,
    //     patient_Address: address,
    //     email: email,
    //     medical_needs: medicalNeeds,
    //     insurance_Type: insurance,
    //     monday: monday,
    //     tuesday: tuesday,
    //     wednesday: wednesday,
    //     thursday: thursday,
    //     friday: friday,
    //     saturday: saturday,
    //     sunday: sunday,

    //   })

      
    // });
   });
  
  

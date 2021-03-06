// 

  console.log("I'm linked");


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
        //assign variables to Appointment data values
        let appointmentNumber = data[0].appointment_id;
        let patientName = `${data[0].patient_First_name} ${data[0].patient_Last_name}`;
        let providerName = `${data[0].provider_First_name} ${data[0].provider_last_name}`;
        let patientAddress = data[0].patient_Address;
        let providerEmail = `Provider Contact Email:</p>\n
        <ul><li id="email">${data[0].email}</li><ul>`;
        let mondayInput = data[0].monday;
        let tuesdayInput = data[0].tuesday;
        let wednesdayInput = data[0].wednesday;
        let thursdayInput = data[0].thursday;
        let fridayInput = data[0].friday;
        let saturdayInput = data[0].saturday;
        let sundayInput = data[0].sunday;

        // change dom to display patient's appointment information
        $("#patient-signup-display").addClass("hidden");
        $("#appointment-page-display").removeClass("hidden");
        $("#appointment-id").text(appointmentNumber);
        $("#patient-name").text(patientName);
        $("#provider-name").text(providerName);
        $("#patient-address").text(data[0].patient_Address);
        $("#provider-email").html(providerEmail);

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
        alert( "Your service days have been scheduled 😀" );
        getPatient()
      })
      .fail(function(err) {
        console.log(err);
        alert( "error" );
      })
    }

    // handler for delete button to delete appointment from appointment table
    $( "#cancel-appointment" ).click(function() {
      let appointment = $("#appointment-id").text()
      $.ajax({
        url: `/api/patient/appointment/${appointment}`,
        type: 'DELETE',
        success: function(result) {
          alert("Your days of service have been canceled")
          window.location.replace("/members");
        }       

      })

    })
      
  });
  
  

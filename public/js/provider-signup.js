$(document).ready(() => {
    // Getting references to our form and input
    const providerForm = $("form.provider-form");
    const providerFirstName = $("input#provider_First_name")
    const providerLastName = $("input#provider_Last_name")
    const providerEmail = $("input#contact-email")
    const providerLicense = $("input#license")
    const monday = $('#monday')
    const tuesday = $('#tuesday')
    const wednesday = $('#wednesday')
    const thursday = $('#thursday')
    const friday= $('#friday')
    const saturday = $('#saturday')
    const sunday = $('#sunday')


  
    providerForm.on("submit", event => {
      event.preventDefault();
      const providerData = {
        provider_First_name: providerFirstName.val().trim(),
        provider_last_name: providerLastName.val().trim(),
        contact_email: providerEmail.val().trim(),
        license: providerLicense.val().trim(),
        monday: monday.val(),
        tuesday: tuesday.val(),
        wednesday: wednesday.val(),
        thursday: thursday.val(),
        friday: friday.val(),
        saturday: saturday.val(),
        sunday: sunday.val(),


      
      };
      console.log('Provider Data',providerData);
      if (!providerData.provider_First_name || !providerData.provider_last_name) {
        return;
      }
      signUpProvider(providerData.provider_First_name, providerData.provider_last_name, providerData.contact_email, providerData.license, providerData.monday, providerData.tuesday, providerData.wednesday, providerData.thursday, providerData.friday, providerData.saturday, providerData.sunday);
      providerFirstName.val("");
      providerLastName.val("");
      providerEmail.val("");
      providerLicense.val("");
      monday.val(false);
      tuesday.val(false);
      wednesday.val(false);
      thursday.val(false);
      friday.val(false);
      saturday.val(false);
      sunday.val(false);
      console.log('signUpProvider');
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpProvider(firstName, lastName, email, license, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
      console.log(firstName, lastName, email, license, monday, tuesday, wednesday, thursday, friday, saturday, sunday);    
      $.post("/api/provider", {
        provider_First_name: firstName,
        provider_last_name: lastName,
        contact_email: email,
        license: license,
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

   
  

  

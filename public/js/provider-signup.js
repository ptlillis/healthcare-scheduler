$(document).ready(() => {
    // Getting references to our form and input
    const providerForm = $("form.provider-form");
    const providerFirstName = $("input#provider_First_name")
    const providerLastName = $("input#provider_Last_name")
  
    // When the signup button is clicked, we validate the email and password are not blank
    providerForm.on("submit", event => {
      event.preventDefault();
      const providerData = {
        provider_First_name: providerFirstName.val().trim(),
        provider_last_name: providerLastName.val().trim()
      
      };
      console.log('Provider Data',providerData);
      if (!providerData.provider_First_name || !providerData.provider_last_name) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpProvider(providerData.provider_First_name, providerData.provider_last_name);
      providerFirstName.val("");
      providerLastName.val("");
      console.log('signUpProvider');
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpProvider(firstName, lastName) {
      console.log(firstName, lastName);
    // Confused which api post should be
      $.post("/api/provider", {
        provider_First_name: firstName,
        provider_last_name: lastName,
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

   
  

  

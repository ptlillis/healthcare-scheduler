$(document).ready(() => {
    // Getting references to our form and input
    const providerForm = $("form.provider-form");
    const providerFirstName = $("input#provider_First_name")
    const providerLastName = $("input#provider_last_name")
  
    // When the signup button is clicked, we validate the email and password are not blank
    providerForm.on("submit", event => {
      event.preventDefault();
      const providerData = {
        provider_First_name: providerFirstName.val().trim(),
        provider_last_name: providerLastName.val().trim()
      
      };
  
      if (!providerData.providerFirstName || ! providerData.providerLastName) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpProvider(providerData.provider_First_name, providerData.provider_last_name);
      providerFirstName.val("");
      providerLastName.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpProvider(firstName, lastName) {

    // Confused which api post should be
      $.post("/api/provider-signup", {
        provider_First_name: firstName,
        provider_last_name: lastName,
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
  

  

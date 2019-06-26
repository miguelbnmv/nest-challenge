window.addEventListener('load', changeMessage, false);
function changeMessage() {
  username = document.getElementById('username');
  email = document.getElementById('email');
  url = document.getElementById('url');
  password = document.getElementById('password');

  username.addEventListener('invalid', function(e) {
      if(username.validity.valueMissing){
          e.target.setCustomValidity("Please insert your full name.");
      } else if(!username.validity.valid) {
          e.target.setCustomValidity("This is not a valid name.");
      }
  }, false);

  email.addEventListener('invalid', function(e) {
      if(email.validity.valueMissing){
          e.target.setCustomValidity("Please insert your email.");
      } else if(!email.validity.valid) {
          e.target.setCustomValidity("This is not a valid email.");
      }
  }, false);

  url.addEventListener('invalid', function(e) {
      if(url.validity.valueMissing){
          e.target.setCustomValidity("Please insert a url.");
      } else if(!url.validity.valid) {
          e.target.setCustomValidity("This is not a valid url.");
      }
  }, false);

  password.addEventListener('invalid', function(e) {
      if(password.validity.valueMissing){
          e.target.setCustomValidity("Please insert a password.");
      } else if(!password.validity.valid) {
          e.target.setCustomValidity("This is not a valid password. Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
      }
  }, false);
}

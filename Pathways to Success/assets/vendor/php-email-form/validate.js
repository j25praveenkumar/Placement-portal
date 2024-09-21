(function () {
  "use strict";

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAUJ9_prQoMIejqKmJzNSlhPSX1mFK4tGM",
    authDomain: "login-2efba.firebaseapp.com",
    projectId: "login-2efba",
    storageBucket: "login-2efba.appspot.com",
    messagingSenderId: "326564177140",
    appId: "1:326564177140:web:24dc6bbd4247247135aaa1"
  };
  firebase.initializeApp(firebaseConfig);

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (e) {
    e.addEventListener('submit', function (event) {
      event.preventDefault();

      let thisForm = this;

      let collectionName = "form_submissions"; // Change this to your desired collection name

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData(thisForm);

      firebase.firestore().collection(collectionName).add({
        name: formData.get('name'), // Assuming 'name' is one of your form fields
        email: formData.get('email'), // Assuming 'email' is one of your form fields
        // Add other form fields similarly
      })
        .then(() => {
          thisForm.querySelector('.loading').classList.remove('d-block');
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset();
        })
        .catch((error) => {
          displayError(thisForm, error);
        });
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
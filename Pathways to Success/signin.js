import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAUJ9_prQoMIejqKmJzNSlhPSX1mFK4tGM",
  authDomain: "login-2efba.firebaseapp.com",
  projectId: "login-2efba",
  storageBucket: "login-2efba.appspot.com",
  messagingSenderId: "326564177140",
  appId: "1:326564177140:web:24dc6bbd4247247135aaa1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupbtn = document.getElementById('signin-btn');
signupbtn.addEventListener('click', function (event) {
  event.preventDefault()


  const email = document.getElementById('loginemail').value;
  const password = document.getElementById('loginpassword').value;

  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("user loged in")
      window.location.href="form.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
})
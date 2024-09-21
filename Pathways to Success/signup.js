import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";


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

const signupbtn = document.getElementById('signup-btn');
signupbtn.addEventListener('click', function (event) {
  event.preventDefault()


  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("acc created")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)

    });
})



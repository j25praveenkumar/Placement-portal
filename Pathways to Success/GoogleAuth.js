
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"; 

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
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById('google-login-btn');
const googleLogin1 = document.getElementById('google-login-btn1');
googleLogin.addEventListener("click",function(){
    signInWithPopup(auth, provider)
  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="../logged.html";

  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
googleLogin1.addEventListener("click",function(){
    signInWithPopup(auth, provider)
  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user1 = result.user1;
    console.log(user1);
    window.location.href="form.html";

    // ...
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
})



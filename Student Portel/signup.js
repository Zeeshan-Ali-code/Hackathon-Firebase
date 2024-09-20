      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
      import { getAuth,
        onAuthStateChanged,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut 
       } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyCv-PpgVax29bdYLN5lHKudaJ9VthEEvqM",
        authDomain: "repeat-11-df889.firebaseapp.com",
        projectId: "repeat-11-df889",
        storageBucket: "repeat-11-df889.appspot.com",
        messagingSenderId: "1008517021207",
        appId: "1:1008517021207:web:13339dd72dfe7dd239a652",
        measurementId: "G-NDJEMNGH1W"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
    // console.log(app);
    
    const auth = getAuth(app);
    // console.log(auth);
    
    
    // Signup Account or Create Account is Start from here
    const signup_email = document.getElementById('signup_email')
    const signup_password = document.getElementById('signup_password')
    const signup_button = document.getElementById('signup_button')
    
    signup_button.addEventListener('click', createUserAccount)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('Login');
            
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
         console.log('Not Login');
         
            // User is signed out
          // ...
        }
      });
    
      function createUserAccount(){ 
        // console.log('email=>', signup_email.value);
        // console.log('password=>', signup_password.value);
        createUserWithEmailAndPassword(
            auth, 
            signup_email.value, 
            signup_password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user=>', user);
    
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
      
        
      }
    
    // Signup Account or Create Account is Finished here
    
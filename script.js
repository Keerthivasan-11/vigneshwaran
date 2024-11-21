import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyD9rTZSqcPNSXKxpY1q3amcyCudXt9QCAc",
 authDomain: "bodystatusmonitor-8714f.firebaseapp.com",
 databaseURL: "bodystatusmonitor-8714f-default-rtdb.asia-southeast1.firebasedatabase.app",
 projectId: "bodystatusmonitor-8714f",
 storageBucket: "bodystatusmonitor-8714f.appspot.com",
 messagingSenderId: "298051228307",
 appId: "1:298051228307:web:81df0e06368c6e463f7366",
 measurementId: "G-20V105BLTK"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

//get ref to database services
  const db = getDatabase(app);

  document.getElementById("btn").addEventListener('click', function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Validate fields are not empty
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
  
    set(ref(db, 'users/' + username), {
      email: email,
      password: password
    }).then(() => {
      alert("Login Successful!");
      window.location.href = "dashboard.html";
    }).catch((error) => {
      console.error("Error writing to Firebase:", error);
      alert("Failed to login");
    });
  });
  
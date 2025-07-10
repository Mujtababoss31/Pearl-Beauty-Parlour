import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC1o-UPv3knLgILidyGQP9opH85lFFzBts",
  authDomain: "pearlbeautyparlour-374e7.firebaseapp.com",
  projectId: "pearlbeautyparlour-374e7",
  storageBucket: "pearlbeautyparlour-374e7.appspot.com",
  messagingSenderId: "415311970981",
  appId: "1:415311970981:web:cc3b83eb0ecd7cfa84834c"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const googleBtn = document.querySelector(".google");
  const logoutBtn = document.getElementById("logout-btn");

  // ✅ Login with Google
  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          localStorage.setItem("user", JSON.stringify({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          }));
          alert("Welcome " + user.displayName);
          window.location.href = "index.html"; // Redirect to main page
        })
        .catch((error) => {
          console.error(error);
          alert("Login Failed");
        });
    });
  }

  // ✅ Logout functionality
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      localStorage.removeItem("user");
      window.location.href = "login.html";
    };
  }

  // ✅ Redirect if already logged in (on login page)
  if (window.location.pathname.includes("login.html")) {
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      window.location.href = "index.html";
    }
  }

  // ✅ Redirect to login if not logged in (on protected pages)
  const user = localStorage.getItem("user");
  if (!user && !window.location.pathname.includes("login.html")) {
    window.location.href = "login.html";
  }

  // ✅ Profile dropdown display
  const profileImage = document.getElementById("user-photo");
  const dropdown = document.getElementById("user-menu");
  const userEmail = document.getElementById("user-email");

  if (user && profileImage && dropdown && userEmail) {
    const userObj = JSON.parse(user);
    profileImage.src = userObj.photo;
    userEmail.textContent = userObj.email;

    profileImage.onclick = () => {
      dropdown.classList.toggle("show");
    };
  }
});






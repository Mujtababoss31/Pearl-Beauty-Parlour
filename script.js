<script>
  // ✅ WhatsApp Toggle
  function toggleWAPopup() {
    document.getElementById('wa-popup').classList.toggle('open');
  }

  // ✅ Smooth Scrolling for Anchor Links
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
          });
        }
      });
    });

    // ✅ Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
      });
    }

    // ✅ Load User Info in Navbar if Logged In
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const userPhoto = document.getElementById("userPhoto");
      const userName = document.getElementById("userName");
      const userEmail = document.getElementById("userEmail");

      if (userPhoto) userPhoto.src = user.photo;
      if (userName) userName.innerText = user.name;
      if (userEmail) userEmail.innerText = user.email;
    }
  });
</script>
// Inside your Google login success function:
.then((result) => {
  const user = result.user;
  const userData = {
    name: user.displayName,
    email: user.email,
    photo: user.photoURL || null,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  alert("Welcome " + user.displayName);

  // ✅ Redirect after login
  window.location.href = "index.html";
})










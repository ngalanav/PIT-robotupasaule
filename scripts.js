/*document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.querySelector(".register");
    registerButton.addEventListener("click", () => {
      alert("Register functionality is not implemented yet!");
    });
  });*/
  

  document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.querySelector(".register");
  
    registerButton.addEventListener("click", () => {
      window.location.href = "registracija.html";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const profileSection = document.getElementById("profile-section");
  
    if (loggedInUser) {
      // check loggedinuser state, display profile icon
      profileSection.innerHTML = `
        <a href="profile.html" title="Mans profils">
          <img src="profile-icon.png" style="border-radius: 50%; width: 32px; height: 32px;">
        </a>
      `;
    } else {
      
      profileSection.innerHTML = ``;
    }
  });
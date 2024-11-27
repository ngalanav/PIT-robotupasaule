document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // get input values
    const identifier = document.getElementById("login-identifier").value.trim(); // email or username
    const password = document.getElementById("login-password").value.trim();
  
    // get users from localstorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // check if user exists
    const user = users.find(
      (user) =>
        (user.email.toLowerCase() === identifier.toLowerCase() || user.username.toLowerCase() === identifier.toLowerCase()) &&
        user.password === password
    );
  
    if (user) {
      // successful login
      alert(`Sveicināti, ${user.username}!`);
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // save loggedinuser state
      window.location.href = "sakumlapa.html"; // redirect to homepage
    } else {
      // invalid login
      alert("Nepareizs e-pasts, lietotājvārds vai parole. Lūdzu, mēģiniet vēlreiz!");
    }
  });
  
  
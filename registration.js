document.querySelector(".submit").addEventListener("click", function (event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const country = document.querySelector("input[name='country']:checked");
  
    // Validation
    if (!username || !email || !phone || !password || !confirmPassword || !country) {
      alert("Lūdzu, aizpildiet visus laukus!");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Paroles nesakrīt!");
      return;
    }
  
  
    // Check email
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
        alert("Šis e-pasts jau ir reģistrēts!");
        return;
      }
    // check login
    const usernameExists = users.some((user) => user.username.toLowerCase() === username.toLowerCase());
    if (usernameExists) {
        alert("Šis lietotājvārds jau ir reģistrēts!");
        return;
      }
  
    
  
    // Save to localstorage
    users.push({
      username,
      email,
      phone,
      password,
      country: country.value,
    });
    localStorage.setItem("users", JSON.stringify(users));
  
    // success
    alert("Reģistrācija veiksmīga!");
    window.location.href = "sakumlapa.html";
  });
  
  // cancel button
  document.querySelector(".cancel").addEventListener("click", function () {
    if (confirm("Vai tiešām vēlaties atcelt reģistrāciju?")) {
      window.location.href = "sakumlapa.html";
    }
  });
  
/*document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.querySelector(".register");
    registerButton.addEventListener("click", () => {
      alert("Register functionality is not implemented yet!");
    });
  });*/
  
  document.addEventListener("DOMContentLoaded", () => {
    const cancelButton = document.querySelector(".cancel");
  
    cancelButton.addEventListener("click", () => {
      window.location.href = "sakumlapa.html";
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.querySelector(".register");
  
    registerButton.addEventListener("click", () => {
      window.location.href = "registracija.html";
    });
  });


  
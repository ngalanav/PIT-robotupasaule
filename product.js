document.addEventListener("DOMContentLoaded", () => {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
  
    if (product) {
      // Populate product details
      document.getElementById("product-name").textContent = product.name;
      document.getElementById("product-brand").textContent = product.brand;
      document.getElementById("product-price").textContent = `€${product.price.toFixed(2)}`;
      document.getElementById("product-image").src = product.image;
      document.getElementById("product-short-desc").textContent = product.shortDescription;
      document.getElementById("product-long-desc").textContent = product.longDescription;
    } else {
      // if no product selected go back
      window.location.href = "roboti.html";
    }
  
    // go back
    document.getElementById("go-back").addEventListener("click", () => {
      window.location.href = "roboti.html";
    });
  });
  
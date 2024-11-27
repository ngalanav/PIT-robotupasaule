document.addEventListener("DOMContentLoaded", () => {
    const binItemsContainer = document.getElementById("bin-items");
    const totalPriceElement = document.getElementById("total-price");
  
    // bin from localStorage
    function loadBin() {
      const bin = JSON.parse(localStorage.getItem("bin")) || [];
      renderBinItems(bin);
    }
  
    // Render items
    function renderBinItems(bin) {
      binItemsContainer.innerHTML = ""; // Clear existing items
  
      if (bin.length === 0) {
        binItemsContainer.innerHTML = "<p>Grozs ir tukšs.</p>";
        updateTotalPrice(0);
        return;
      }
  
      let totalPrice = 0;
  
      bin.forEach((item, index) => {
        totalPrice += item.price;
  
        const binItem = document.createElement("div");
        binItem.classList.add("bin-item");
  
        binItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="bin-item-details">
            <h4>${item.name}</h4>
            <p>€${item.price.toFixed(2)}</p>
          </div>
          <div class="bin-item-actions">
            <button class="remove-button" data-index="${index}">Noņemt</button>
          </div>
        `;
  
        binItemsContainer.appendChild(binItem);
      });
  
      updateTotalPrice(totalPrice);
    }
  
    // Update total price
    function updateTotalPrice(total) {
      totalPriceElement.textContent = `Kopējā cena: €${total.toFixed(2)}`;
    }
  
    // Remove item from bin
    function removeItemFromBin(index) {
      let bin = JSON.parse(localStorage.getItem("bin")) || [];
      bin.splice(index, 1); // Remove item at index
      localStorage.setItem("bin", JSON.stringify(bin));
      loadBin(); // Re-render bin
    }
  
    // Event listener for remove buttons
    binItemsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-button")) {
        const index = parseInt(e.target.getAttribute("data-index"));
        removeItemFromBin(index);
      }
    });
  
    // Initial load
    loadBin();
  });
  
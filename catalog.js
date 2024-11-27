// catalog scripts
document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const filterButtons = document.querySelectorAll(".filter-button");
    const sortDropdown = document.getElementById("sort-products");
    const priceRange = document.getElementById("price-range");
    const priceValue = document.getElementById("price-value");

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
    // produktu kategorijas
    const categories = ["visi", "mājsaimniecības", "industriālie", "biedrošanās", "pētniecības"];
    
    // product array
    const products = [
      {
        id: 1,
        name: "Unitree G1 Humanoid Robot",
        brand: "Unitree Robotics",
        price: 24426.17,
        image: "https://autodiscovery.co.uk/images/G1/g1-humanoid-robot.jpg",
        shortDescription: "Humanoīds robots, kas paredzēts daudzpusīgai kustībai un progresīvai mācīšanai.",
        longDescription:
          "Unitree G1 humanoīds robots (EU) ir veidots, lai sasniegtu neierobežotu potenciālu sportā, pētniecībā un citās aktivitātēs. Aprīkots ar 23 brīvības pakāpēm, šis robots piedāvā vienmērīgu un precīzu vadību sarežģītiem lietojumiem.",
        category: "industriālie",
      },
      {
        id: 2,
        name: "Agility Pētniecības Robots",
        brand: "Agility Robotics",
        price: 18426.17,
        image: "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/300x_a1-1_cTC/agilityllm1215-01-1709576714.jpg",
        shortDescription: "Agility robots, kas optimizēts pētniecībai un augstas veiktspējas kustībām.",
        longDescription:
          "Agility pētniecības robots ir izveidots uzlabotām pētniecības iespējām. Ar moderniem sensoriem un aktuatoriem tas nodrošina nepārspējamu precizitāti akadēmiskai un industriālai lietošanai.",
        category: "pētniecības",
      },
      {
        id: 3,
        name: "Energize Lab Eilik Bot",
        brand: "Energize Lab",
        price: 205.25,
        image: "https://cdn.shopify.com/s/files/1/0573/1486/9416/files/energize-lab-eilik-little-companion-bot-with-personality-character-blue-img1_540x.webp?v=1720495008",
        shortDescription: "Mazs kompanjons ar lielu personību.",
        longDescription:
          "Eilik ir mazs, bet ļoti spējīgs kompanjons, kurš ienes dzīvē izklaidi un draudzību. Ideāli piemērots mājsaimniecībai vai birojam, Eilik piedāvā interaktīvas emocijas un funkcionalitāti.",
        category: "biedrošanās",
      },
      {
        id: 4,
        name: "Odyssey Robot",
        brand: "Odyssey Toys",
        price: 999.99,
        image: "https://odysseytoys.com/cdn/shop/products/Robot-red.jpg?v=1722265485",
        shortDescription: "Piemērots bērniem un jauniešiem izklaidei un izglītībai.",
        longDescription:
          "Odyssey robots ir paredzēts bērniem un jauniešiem, nodrošinot izklaidējošu un izglītojošu pieredzi. Ar draudzīgu dizainu un drošām funkcijām, tas ir lielisks papildinājums jebkurai mājsaimniecībai.",
        category: "mājsaimniecības",
      },
      {
        id: 5,
        name: "iRobot Roomba Combo",
        brand: "iRobot",
        price: 500.00,
        image: "https://www.irobot.co.uk/dw/image/v2/BFXP_PRD/on/demandware.static/-/Sites-master-catalog-irobot/default/dwfcca9312/images/large/combo/C975840_1.jpg?sw=646",
        shortDescription: "Viedais grīdas tīrīšanas robots.",
        longDescription:
          "iRobot Roomba Combo apvieno grīdas slaucīšanu un mazgāšanu, lai nodrošinātu maksimālu tīrību. Ar inteliģentiem sensoriem un viedajiem tīrīšanas režīmiem tas ir ideāls risinājums mājām ar mājdzīvniekiem un bērniem.",
        category: "mājsaimniecības",
      },
      {
        id: 6,
        name: "Whisker Litter-Robot 3",
        brand: "Whisker",
        price: 205.25,
        image: "https://image.smythstoys.com/zoom/167345.jpg",
        shortDescription: "Automatizēts pakaišu tīrīšanas robots kaķiem.",
        longDescription:
          "Whisker Litter-Robot 3 ir ideāls risinājums kaķu īpašniekiem, kuri vēlas automatizēt pakaišu tīrīšanas procesu. Ar lietotājam draudzīgu dizainu un viediem sensoriem tas nodrošina vienmērīgu un tīru vidi jūsu mājdzīvniekiem.",
        category: "mājsaimniecības",
      },
    ];
    
  
    // Render products
    function renderProducts(filterCategory = "visi", sortOption = "name-asc", maxPrice = 25000) {
      productList.innerHTML = ""; // Clear product list
  
      // Filter products by category and price
      let filteredProducts = products.filter(product => {
        return (
          (filterCategory === "visi" || product.category === filterCategory) &&
          product.price <= maxPrice
        );
      });
  
      // Sort products
      filteredProducts = filteredProducts.sort((a, b) => {
        switch (sortOption) {
          case "name-asc":
            return a.name.localeCompare(b.name);
          case "name-desc":
            return b.name.localeCompare(a.name);
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          default:
            return 0;
        }
      });
  
      // Render filtered and sorted products
      filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.setAttribute("data-category", product.category);
  
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <h3>${product.name}</h3>
          <p>${product.shortDescription}</p>
          <p class="price">€${product.price.toFixed(2)}</p>
          <div class="product-actions">
          <button class="inspect-button">Apskatīt</button>
          ${
            loggedInUser
              ? `<button class="add-to-bin-button" data-id="${product.id}"><img src="cart-icon.png"></button>`
              : `<p style="color: gray;">Pieslēdzieties, lai pievienotu grozam</p>`
          }
        </div>
        `;
        // Add event listener for "Apskatīt" button
    productCard.querySelector(".inspect-button").addEventListener("click", () => {
        // Save product details to localStorage
        localStorage.setItem("selectedProduct", JSON.stringify(product));
  
        // Navigate to produkts.html
        window.location.href = "produkts.html";
      });

      if (loggedInUser) {
        const addToBinButton = productCard.querySelector(".add-to-bin-button");
        addToBinButton.addEventListener("click", () => {
          addToBin(product.id);
        });
      }
  
        productList.appendChild(productCard);
      });
    }
     // Add product to the bin
  function addToBin(productId) {
    const bin = JSON.parse(localStorage.getItem("bin")) || [];
    const product = products.find((p) => p.id === parseInt(productId));

    if (product) {
      bin.push(product);
      localStorage.setItem("bin", JSON.stringify(bin));
      alert(`"${product.name}" ir pievienots grozam!`);
    }
  }
  
    // Event listener for filter buttons
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Render products based on selected filter
        const category = button.getAttribute("data-category");
        const sortOption = sortDropdown.value;
        const maxPrice = priceRange.value;
        renderProducts(category, sortOption, maxPrice);
      });
    });
  
    // Event listener for sorting dropdown
    sortDropdown.addEventListener("change", () => {
      const activeButton = document.querySelector(".filter-button.active");
      const filterCategory = activeButton ? activeButton.getAttribute("data-category") : "visi";
      const maxPrice = priceRange.value;
      renderProducts(filterCategory, sortDropdown.value, maxPrice);
    });
  
    // Event listener for price range slider
    priceRange.addEventListener("input", () => {
      priceValue.textContent = priceRange.value;
      const activeButton = document.querySelector(".filter-button.active");
      const filterCategory = activeButton ? activeButton.getAttribute("data-category") : "visi";
      const sortOption = sortDropdown.value;
      renderProducts(filterCategory, sortOption, priceRange.value);
    });
    
    // Initial render
    renderProducts();
  });

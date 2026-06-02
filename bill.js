const prices = {
      'Pancakes': 120,
      'Omelette': 100,
      'Toast': 60,
      'Rice & Curry': 200,
      'Thali': 220,
      'Dal Makhani': 180,
      'Paneer Butter Masala': 230,
      'Butter Naan': 40,
      'Biryani': 250,
      'Pizza': 250,
      'Burger': 150,
      'Fries': 100,
      'Noodles': 180,
      'Coke': 50,
      'Coffee': 80,
      'Tea': 40,
      'Juice': 60
    };

    function addItemRow() {
      const row = document.createElement('div');
      row.className = 'item-row';

      const options =
        '<option value="None">-- None --</option>' +
        Object.keys(prices).map(
          item => `<option value="${item}">${item} - ₹${prices[item]}</option>`
        ).join('');

      row.innerHTML = `
        <select class="food-select">${options}</select>
        <input type="number" class="quantity" min="1" value="1">
      `;

      document.getElementById('items').appendChild(row);
    }

    function generateRestaurantBill() {
      const customer = document.getElementById('customer').value || "Customer";
      const selects = document.querySelectorAll('.food-select');
      const quantities = document.querySelectorAll('.quantity');

      let total = 0;
      let billHTML = `<h2>Bill for ${customer}</h2><ul>`;

      selects.forEach((select, i) => {
        if (select.value !== 'None') {
          const qty = parseInt(quantities[i].value);
          const cost = prices[select.value] * qty;
          total += cost;
          billHTML += `<li>${select.value} × ${qty} = ₹${cost}</li>`;
        }
      });

      const tax = total * 0.05;
      const finalTotal = total + tax;

      billHTML += `
        </ul>
        <p><strong>Subtotal:</strong> ₹${total}</p>
        <p><strong>Tax (5%):</strong> ₹${tax.toFixed(2)}</p>
        <p><strong>Total Amount:</strong> ₹${finalTotal.toFixed(2)}</p>
      `;

      document.getElementById('bill').innerHTML = billHTML;

      generateQR(finalTotal, customer);
    }

    function generateQR(amount, customer) {
      document.getElementById('qr-section').style.display = "block";
      document.getElementById('qrcode').innerHTML = "";

      // 🔴 CHANGE THIS TO YOUR REAL UPI ID
      const upiID = "9627282933@ibl";

      const upiURL =
        `upi://pay?pa=${upiID}&pn=Restaurant&am=${amount}&cu=INR&tn=Bill for ${customer}`;

      new QRCode(document.getElementById("qrcode"), {
        text: upiURL,
        width: 180,
        height: 180
      });
    }

    function clearBill() {
      document.getElementById('bill').innerHTML = "";
      document.getElementById('qrcode').innerHTML = "";
      document.getElementById('qr-section').style.display = "none";
    }
    // Dark Mode

const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.innerHTML = "☀️ Light Mode";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeBtn.innerHTML = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.innerHTML = "🌙 Dark Mode";
  }
});
particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    },

    color: {
      value: "#ff5722"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: 4,
      random: true
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff9800",
      opacity: 0.4,
      width: 1
    },

    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },

      onclick: {
        enable: true,
        mode: "push"
      }
    },

    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 1
        }
      },

      push: {
        particles_nb: 5
      }
    }
  },

  retina_detect: true
});
const container = document.querySelector(".container");

document.addEventListener("mousemove", (e) => {

  const x =
    (window.innerWidth / 2 - e.pageX) / 25;

  const y =
    (window.innerHeight / 2 - e.pageY) / 25;

  container.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;
});

document.addEventListener("mouseleave", () => {

  container.style.transform =
    "rotateY(0deg) rotateX(0deg)";
});
function showMenuQR(){
    document.getElementById("menuPopup").style.display="flex";
}

function closeMenuQR(){
    document.getElementById("menuPopup").style.display="none";
}

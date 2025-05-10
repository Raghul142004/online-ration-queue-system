const translations = {
  en: {
    profileTitle: "Profile Information",
    nameLabel: "Name:",
    cardLabel: "Card Number:",
    dobLabel: "DOB:",
    addressLabel: "Address:",
    
    notificationsTitle: "Notifications",
    notificationsMarquee: "Rice, Wheat, Sugar, Oil Available Now!",
    nextProductsButton: "Next: Select Products",
    productsTitle: "Select Products",
    nextShopsButton: "Next: Choose Shop",
    shopsTitle: "Select Nearby Shop",
    nextSlotsButton: "Next: Book Slot",
    slotsTitle: "Book Slots",
    nextPaymentButton: "Next: Payment",
    paymentTitle: "Payment Confirmation",
    confirmSlotButton: "Confirm Slot",
    cancelSlotButton: "Cancel Slot",
    homeButton: "Home",
    settingsTitle: "Settings",
    summaryProducts: "Selected Products",
    summarySlot: "Selected Slot",
    summaryShop: "Selected Shop",
    summaryAmount: "Total Amount",
    productsList: {
      "Rice": "Rice", "Wheat": "Wheat", "Sugar": "Sugar", "Oil": "Oil", "Dal": "Dal",
      "Salt": "Salt", "Tea": "Tea", "Coffee": "Coffee", "Sooji": "Sooji"
    }
  }, 
  hi: {
    profileTitle: "प्रोफ़ाइल जानकारी",
    nameLabel: "नाम:",
    cardLabel: "कार्ड नंबर:",
    dobLabel: "जन्म तिथि:",
    addressLabel: "पता:",
    notificationsTitle: "सूचनाएँ",
    notificationsMarquee: "चावल, गेहूं, चीनी, तेल अब उपलब्ध हैं!",
    nextProductsButton: "अगला: उत्पाद चुनें",
    productsTitle: "उत्पाद चुनें",
    nextShopsButton: "अगला: दुकान चुनें",
    shopsTitle: "नजदीकी दुकान चुनें",
    nextSlotsButton: "अगला: स्लॉट बुक करें",
    slotsTitle: "स्लॉट बुक करें",
    nextPaymentButton: "अगला: भुगतान",
    paymentTitle: "भुगतान पुष्टि",
    confirmSlotButton: "स्लॉट पुष्टि करें",
    cancelSlotButton: "स्लॉट रद्द करें",
    homeButton: "होम",
    settingsTitle: "सेटिंग्स",
    summaryProducts: "चयनित उत्पाद",
    summarySlot: "चयनित स्लॉट",
    summaryShop: "चयनित दुकान",
    summaryAmount: "कुल राशि",
    productsList: {
      "Rice": "चावल", "Wheat": "गेहूं", "Sugar": "चीनी", "Oil": "तेल", "Dal": "दाल",
      "Salt": "नमक", "Tea": "चाय", "Coffee": "कॉफ़ी", "Sooji": "सूजी"
    }
  }, // <== COMMA ADDED HERE
  ta: {
    profileTitle: "சுயவிவர தகவல்",
    nameLabel: "பெயர்:",
    cardLabel: "அட்டை எண்:",
    dobLabel: "பிறந்த தேதி:",
    addressLabel: "முகவரி:",
    notificationsTitle: "அறிவிப்புகள்",
    notificationsMarquee: "அரிசி, கோதுமை, சக்கரை, எண்ணெய் தற்போது கிடைக்கின்றன!",
    nextProductsButton: "அடுத்தது: பொருட்களை தேர்வு செய்க",
    productsTitle: "பொருட்கள் தேர்வு",
    nextShopsButton: "அடுத்தது: கடையை தேர்வு செய்க",
    shopsTitle: "அருகிலுள்ள கடையை தேர்வு செய்க",
    nextSlotsButton: "அடுத்தது: இடம் முன்பதிவு",
    slotsTitle: "இடங்களை முன்பதிவு செய்க",
    nextPaymentButton: "அடுத்தது: கட்டணம்",
    paymentTitle: "கட்டண உறுதிப்பாடு",
    confirmSlotButton: "இடத்தை உறுதி செய்க",
    cancelSlotButton: "இடத்தை ரத்து செய்க",
    homeButton: "முகப்பு",
    settingsTitle: "அமைப்புகள்",
    summaryProducts: "தேர்ந்தெடுக்கப்பட்ட பொருட்கள்",
    summarySlot: "தேர்ந்தெடுக்கப்பட்ட இடம்",
    summaryShop: "தேர்ந்தெடுக்கப்பட்ட கடை",
    summaryAmount: "மொத்த தொகை",
    productsList: {
      "Rice": "அரிசி", "Wheat": "கோதுமை", "Sugar": "சக்கரை", "Oil": "எண்ணெய்", "Dal": "பருப்பு",
      "Salt": "உப்பு", "Tea": "தேநீர்", "Coffee": "காபி", "Sooji": "ரவை"
    }
  }
};

let selectedLanguage = 'en';
let selectedProducts = [];
let selectedSlot = '';



const products = [
  { name: "Rice", img: "https://5.imimg.com/data5/SELLER/Default/2025/3/495486196/BK/PG/AI/114983981/swarna-steam-rice-1000x1000.jpg", price: 30, stock: 50 },
  { name: "Wheat", img: "https://5.imimg.com/data5/SELLER/Default/2023/5/312465242/CD/CP/KT/123752371/b-grade-wheat-grain-1000x1000.jpg", price: 7.5, stock: 40 },
  { name: "Sugar", img: "http://5.imimg.com/data5/SELLER/Default/2025/3/494679077/CT/JK/HE/223247760/sugar-1000x1000.jpg", price: 13.5, stock: 30 },
  { name: "Oil", img: "https://media.starquik.com/catalog/product/SQ108144.jpg", price: 25, stock: 20 },
  { name: "Dal", img: "https://5.imimg.com/data5/SELLER/Default/2023/12/365445161/HQ/HP/MI/186645388/yellow-organic-toor-dal-1000x1000.jpg", price: 35, stock: 45 },
  { name: "Salt", img: "https://5.imimg.com/data5/SELLER/Default/2023/8/337442759/XZ/SI/EQ/24585081/tata-salt-rock-salt-1000x1000.jpg", price: 10, stock: 60 },
  { name: "Tea", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrpqQzdy5SrHoGDUEk44Wr-4IED6YTouByw&s", price: 20, stock: 30 },
  { name: "Coffee", img: "https://media.starquik.com/catalog/product/SQ103795.jpg", price: 35, stock: 25 },
  { name: "Sooji", img: "https://media.starquik.com/catalog/product/SQ106194.jpg", price: 22, stock: 45 }
];

const grid = document.getElementById('productsGrid');
products.forEach(prod => {
  const div = document.createElement('div');
  div.className = "product-item";
  div.innerHTML = `<img src="${prod.img}" style="width:100px;height:100px;"><h4>${prod.name}</h4><p>₹${prod.price} | Stock: ${prod.stock}</p>`;
  div.onclick = () => {
    div.classList.toggle('selected');
    if (selectedProducts.includes(prod)) {
      selectedProducts = selectedProducts.filter(p => p !== prod);
    } else {
      selectedProducts.push(prod);
    }
  };
  grid.appendChild(div);
});

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'payment') updateSummary();
}

function updateSlots() {
  const slots = [
    { time: '9:00 AM', status: 'available' },
    { time: '10:00 AM', status: 'limited' },
    { time: '11:00 AM', status: 'full' },
    { time: '12:00 PM', status: 'available' },
    { time: '1:00 PM', status: 'limited' },
    { time: '2:00 PM', status: 'full' },
    { time: '3:00 PM', status: 'available' },
    { time: '4:00 PM', status: 'limited' },
    { time: '5:00 PM', status: 'full' }
  ];
  const grid = document.getElementById('slotsGrid');
  grid.innerHTML = '';
  slots.forEach(slot => {
    const btn = document.createElement('button');
    btn.innerText = slot.time;
    btn.style.backgroundColor = slot.status === 'available' ? 'green' : (slot.status === 'limited' ? 'yellow' : 'red');
    btn.onclick = () => {
      selectedSlot = slot.time;
      document.querySelectorAll('#slotsGrid button').forEach(b => b.classList.remove('selected-slot'));
      btn.classList.add('selected-slot');
    };
    grid.appendChild(btn);
  });
}

function updateSummary() {
  const t = translations[selectedLanguage];
  let total = selectedProducts.reduce((sum, p) => sum + p.price, 0);
  const shop = document.getElementById('shopSelect').value;
  document.getElementById('summary').innerHTML = `
    <h4>${t.summaryProducts}:</h4> ${selectedProducts.map(p => t.productsList[p.name] || p.name).join(', ')}<br><br>
    <h4>${t.summarySlot}:</h4> ${selectedSlot}<br><br>
    <h4>${t.summaryShop}:</h4> ${shop}<br><br>
    <h4>${t.summaryAmount}: ₹${total}</h4>
  `;
}

function confirmSlot() {
  const shop = document.getElementById('shopSelect').value;
  const total = selectedProducts.reduce((sum, p) => sum + p.price, 0);
  localStorage.setItem('orderProducts', JSON.stringify(selectedProducts.map(p => p.name)));
  localStorage.setItem('orderSlot', selectedSlot);
  localStorage.setItem('orderShop', shop);
  localStorage.setItem('orderAmount', total);
  window.location.href = "book.html";
}

function cancelSlot() {
  window.location.href = "profile.html";
}

function changeLanguage() {
  const lang = document.getElementById('languageSelect').value;
  selectedLanguage = lang;
  const t = translations[lang];
  for (const key in t) {
    const element = document.getElementById(key);
    if (element && key !== 'productsList') {
      element.innerText = t[key];
    }
  }
  document.getElementById('notificationsMarquee').innerText = t.notificationsMarquee;
  document.querySelectorAll('#productsGrid .product-item').forEach((div, index) => {
    div.querySelector('h4').innerText = t.productsList[products[index].name] || products[index].name;
  });
  updateSummary();
}

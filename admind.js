// Sidebar navigation
document.getElementById("dashboardLink").addEventListener("click", function () {
  showSection("mainSection");
});
document.getElementById("ordersLink").addEventListener("click", function () {
  showSection("mainSection");
});
document.getElementById("analyticsLink").addEventListener("click", function () {
  showSection("analyticsSection");
  loadAnalyticsCharts();
});
document.getElementById("settingsLink").addEventListener("click", function () {
  showSection("settingsSection");
});

function showSection(id) {
  document.getElementById("mainSection").style.display = "none";
  document.getElementById("analyticsSection").style.display = "none";
  document.getElementById("settingsSection").style.display = "none";
  document.getElementById(id).style.display = "block";
}

// Map Setup
const map = L.map('map').setView([13.0827, 80.2707], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
  { name: 'T Nagar', coords: [13.0418, 80.2332] },
  { name: 'Guindy', coords: [13.0056, 80.2209] },
  { name: 'Chetpet', coords: [13.0729, 80.2449] },
  { name: 'Anna Nagar', coords: [13.0902, 80.2125] }
];

locations.forEach(loc => {
  L.marker(loc.coords).addTo(map).bindPopup(loc.name);
});

// Order tracking
document.getElementById('trackOrderButton').addEventListener('click', () => {
  const orderId = document.getElementById('orderSearchInput').value;
  
});

// Logout
document.getElementById('logoutButton').addEventListener('click', () => {
  
  // window.location.href = "login.html";
});

// Analytics Charts (loaded only once)
const barChartCtx = document.getElementById('barChart').getContext('2d');
const pieChartCtx = document.getElementById('pieChart').getContext('2d');

// Bar Chart
new Chart(barChartCtx, {
  type: 'bar',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Orders Delivered',
      data: [50, 80, 120, 150],
      backgroundColor: '#007bff'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,  // Allows flexible sizing
    plugins: {
      legend: { display: true },
    },
    layout: {
      padding: 20,
    }
  }
});

// Pie Chart
new Chart(pieChartCtx, {
  type: 'pie',
  data: {
    labels: ['Delivered', 'Pending', 'Booked'],
    datasets: [{
      data: [300, 50, 150],
      backgroundColor: ['#28a745', '#fd7e14', '#007bff']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,  // Allows flexible resizing
    layout: {
      padding: 20,
    }
  }
});

let chartsLoaded = false;
function loadAnalyticsCharts() {
  if (chartsLoaded) return;
  chartsLoaded = true;

  new Chart(document.getElementById('barChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Orders Delivered',
        data: [50, 80, 120, 150],
        backgroundColor: '#007bff'
      }]
    }
  });

  new Chart(document.getElementById('pieChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Delivered', 'Pending', 'Booked'],
      datasets: [{
        data: [300, 50, 150],
        backgroundColor: ['#28a745', '#fd7e14', '#007bff']
      }]
    }
  });

  new Chart(document.getElementById('lineChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Total Orders',
        data: [200, 300, 250, 400, 500],
        borderColor: '#007bff',
        fill: false
      }]
    }
  });
}

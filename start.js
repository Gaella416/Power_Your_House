const statusBox = document.getElementById("status");

// Simulated meter data (IoT-like updates)
const meterStates = [
  { text: "Power is ON", class: "on" },
  { text: "Low electricity units remaining", class: "low" },
  { text: "No power in the house", class: "off" },
  { text: "Area-wide power outage detected", class: "outage" }
];

function saveToken() {
  const token = document.getElementById("token").value;
  const meter = document.getElementById("meter").value;

  if (!meter || token.length !== 20) {
    alert("Please select a meter and enter a valid 20-digit token.");
    return;
  }

  alert("Token saved successfully.");
}

// Simulate automatic updates from the Cashpower meter
setInterval(() => {
  const state = meterStates[Math.floor(Math.random() * meterStates.length)];
  updateStatus(state);
  sendNotification(state.text);
}, 12000);

function updateStatus(state) {
  statusBox.className = `status ${state.class}`;
  statusBox.textContent = state.text;
}

function sendNotification(message) {
  if (Notification.permission === "granted") {
    new Notification("Smart Cashpower", { body: message });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission();
  }
}

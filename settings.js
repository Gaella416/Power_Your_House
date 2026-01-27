// Get elements
const lowPower = document.getElementById("lowPower");
const powerStatus = document.getElementById("powerStatus");
const areaOutage = document.getElementById("areaOutage");
const meterNumber = document.getElementById("meterNumber");
const meterName = document.getElementById("meterName");
const hideToken = document.getElementById("hideToken");
const language = document.getElementById("language");
const statusText = document.getElementById("status");

// Load settings
window.onload = function () {
  const settings = JSON.parse(localStorage.getItem("settings"));

  if (settings) {
    lowPower.checked = settings.lowPower || false;
    powerStatus.checked = settings.powerStatus || false;
    areaOutage.checked = settings.areaOutage || false;
    meterNumber.value = settings.meterNumber || "";
    meterName.value = settings.meterName || "";
    hideToken.checked = settings.hideToken || false;
    language.value = settings.language || "en";
  }
};

// Save settings
function saveSettings() {
  const settings = {
    lowPower: lowPower.checked,
    powerStatus: powerStatus.checked,
    areaOutage: areaOutage.checked,
    meterNumber: meterNumber.value.trim(),
    meterName: meterName.value.trim(),
    hideToken: hideToken.checked,
    language: language.value
  };

  localStorage.setItem("settings", JSON.stringify(settings));

  statusText.innerText = "Settings saved successfully ✅";
}

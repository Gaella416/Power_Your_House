const mongoose = require("mongoose");

const meterSchema = new mongoose.Schema({
    meterNumber: String,
    meterName: String,
    lowPowerAlert: Boolean,
    powerStatusAlert: Boolean,
    outageAlert: Boolean
});

module.exports = mongoose.model("Meter", meterSchema);
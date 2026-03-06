const express = require("express");
const router = express.Router();
const Meter = require("../models/meter");

// Save meter settings
router.post("/save", async (req, res) => {
    try {
        const meter = new Meter(req.body);
        await meter.save();
        res.json({message: "Meter saved"});
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all meters
router.get("/", async (req, res) => {
    const meters = await Meter.find();
    res.json(meters);
});

module.exports = router;
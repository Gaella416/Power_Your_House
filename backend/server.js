const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const meterRoutes = require("./routes/meterRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/cashpowerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected"))
.catch(err => console.log(err));

app.use("/api/meters", meterRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const { scraper } = require("./scraper");

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.post("/user", async (req, res) => {
  try {
    // console.log(req.body);
    scraper(req.body).then((data) => {
      res.json(data);
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

const port = 8553; // Set the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

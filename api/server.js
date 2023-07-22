const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const { scraper } = require("./scraper");
const { getDetails } = require("./getdetails");

app.use(express.json());
app.use(cors());
app.post("/user", async (req, res) => {
  try {
    scraper(req.body).then((data) => {
      let newRes = getDetails(data);
      newRes.then((newdata) => {
        res.json(newdata);
      });
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

const port = 8553;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

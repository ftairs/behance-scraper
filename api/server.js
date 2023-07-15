const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const { scraper } = require("./scraper");

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.post("/user", async (req, res) => {
  try {
    // const { username } = req.body;
    console.log(req.body);

    // // Perform an Axios request here - THIS EVEN NEEDED?
    // const response = await axios.get(
    //   `https://www.behance.net/${username}`
    // );

    // do the script with an argument
    //script here
    scraper(req.body);

    // assign the results to an object
    let toSend = {
      testing: "success",
    };
    // Process the response and send it back to the client
    res.json(toSend);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

const port = 8553; // Set the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

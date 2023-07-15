const axios = require("axios");
const cheerio = require("cheerio");
const { writeFile } = require("fs/promises");
const { config } = require("./config");

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}

function scraper({ username }) {
  console.log("USERNAME___", username);
}
module.exports = {
  scraper,
};

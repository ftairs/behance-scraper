// const axios = require("axios");
// const cheerio = require("cheerio");
const { writeFile } = require("fs/promises");
// const { config } = require("./config");

// for making a hard copy
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
  let data = ["empty array"];

  //final stuff
  writeToFile("data.json", JSON.stringify(data));
  return data;
}
module.exports = {
  scraper,
};

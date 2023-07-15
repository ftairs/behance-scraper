const axios = require("axios");
const cheerio = require("cheerio");
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
  console.log("USERNAME=", username);
  let usableURL = "https://behance.net/" + username;
  return axios.get(usableURL).then(({ data }) => {
    //setup
    const $ = cheerio.load(data);
    let allProjects = [];

    // main part
    const theItems = $(".js-project-cover")
      .map((_, project) => {
        const $project = $(project);
        let thisObj = {
          title: $project.find(".e2e-Title-owner").text(),
          image: $project.find(".js-cover-image").attr("src"),
          imageData: "",
          projectURL: $project.find(".e2e-Title-owner").attr("href"),
          date: "",
          type: "",
          views: 0,
          likes: 0,
        };
        allProjects.push(thisObj);
        return $project;
      })
      .toArray();

    // detail stuff
    // TODO get the details
    //final stuff
    writeToFile("data.json", JSON.stringify(allProjects));
    return allProjects;
  });
}
module.exports = {
  scraper,
};

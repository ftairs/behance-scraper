const axios = require("axios");
const cheerio = require("cheerio");
const { writeFile } = require("fs/promises");
const { getDetails } = require("./getdetails");

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}

function scraper({ username }) {
  console.log("USERNAME =", username);
  let usableURL = "https://behance.net/" + username;
  return axios
    .get(usableURL)
    .then(async ({ data }) => {
      const $ = cheerio.load(data);
      let allProjects = [];
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
      return allProjects;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
      return [];
    });
}
module.exports = {
  scraper,
};

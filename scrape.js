// Custom Behance Scraper - github.com/ftairs - Victor Fuentes

console.log("beginning scrape...");
const axios = require("axios");
const cheerio = require("cheerio");
const { writeFile } = require("fs/promises");

const config = {
  userURL: "https://www.behance.net/ftairs",
  digDeep: true,
};

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}

axios.get(config.userURL).then(({ data }) => {
  const $ = cheerio.load(data);
  let allProjects = [];

  const theItems = $(".js-project-cover")
    .map((_, project) => {
      const $project = $(project);
      //TODO: pull image as object?
      let thisObj = {
        title: $project.find(".js-project-cover-title-link").text(),
        image: $project.find(".js-cover-image").attr("src"),
        projectURL: $project.find(".js-project-cover-image-link").attr("href"),
        date: "",
        type: "",
      };
      allProjects.push(thisObj);
      return $project;
    })
    .toArray();

  // get individual project
  if (config.digDeep) {
    allProjects.map((item, index) => {
      axios.get(item.projectURL).then(({ data }) => {
        const $$ = cheerio.load(data);

        //TODO: convert to spread concat
        //set it all from the inner URL
        allProjects[index].date = $$("time:first-of-type").first().text();
        allProjects[index].views = $$(".beicons-pre-eye").first().text();
        allProjects[index].content = $$("#project-canvas").html();
        allProjects[index].type = [];

        //process those creative fields
        const fieldElements = $$(".js-creative-field").map((_, field) => {
          const $field = $(field);
          allProjects[index].type.push($field.find("p").text());
        });

        //final write after processing
        writeToFile("scrape.json", JSON.stringify(allProjects));
      });
      return null;
    });
  } else {
    //write with just title,image,projectURL
    writeToFile("scrape.json", JSON.stringify(allProjects));
  }
});

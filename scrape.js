// Custom Behance Scraper - 2023 - github.com/ftairs - Victor Fuentes
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
console.log("beginning scrape...");
axios.get(config.userURL).then(({ data }) => {
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

  if (config.digDeep) {
    allProjects.map((item, index) => {
      axios
        .get("https://www.behance.net" + item.projectURL)
        .then(({ data }) => {
          const $$ = cheerio.load(data);
          allProjects[index].date = $$("time:first-of-type").first().text();
          allProjects[index].views = $$(".beicons-pre-eye").first().text();
          allProjects[index].commentCount = $$(".qa-project-comment-count")
            .first()
            .text();
          allProjects[index].desc = $$(".ProjectInfo-projectDescription-dNH")
            .first()
            .text();
          allProjects[index].type = [];
          allProjects[index].tags = [];
          allProjects[index].content = $$("#primary-project-content").html();
          const fieldElements = $$(".js-creative-field").map((_, field) => {
            const $field = $(field);
            allProjects[index].type.push($field.find("p").text());
          });
          const tagsElements = $$(".ProjectTags-tag-MKN").map((_, field) => {
            const $field = $(field);
            allProjects[index].tags.push($field.find("a").text());
          });
          writeToFile("scrape.json", JSON.stringify(allProjects));
          console.log(allProjects);
        });
    });
  } else {
    writeToFile("scrape.json", JSON.stringify(allProjects));
    console.log(allProjects);
  }
});

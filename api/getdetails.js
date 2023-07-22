const superagent = require("superagent");
const cheerio = require("cheerio");

const getDetails = async (allProjects) => {
  const promiseArray = allProjects.map(async (obj) => {
    const response = await superagent.get(
      "https://www.behance.net" + obj.projectURL
    );
    const $$ = cheerio.load(response.text);
    obj.type = [];
    obj.tags = [];
    obj.content = $$("#primary-project-content").html();
    const fieldElements = $$(".js-creative-field").map((_, field) => {
      const $field = $$(field);
      obj.type.push($field.find("p").text());
    });
    const tagsElements = $$(".ProjectTags-tag-MKN").map((_, field) => {
      const $field = $$(field);
      obj.tags.push($field.find("a").text());
    });

    return {
      ...obj,
      date: $$("time:first-of-type").first().text(),
      views: $$(".beicons-pre-eye").first().text(),
      commentCount: $$(".qa-project-comment-count").first().text(),
      desc: $$(".ProjectInfo-projectDescription-dNH").first().text(),
    };
  });

  return Promise.all(promiseArray).then((data) => data);
};
module.exports = {
  getDetails,
};

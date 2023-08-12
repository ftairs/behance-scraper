# Behance Web Scraper

Discover the freedom of owning your creative data with BeScrape - a
tool that merges the digital and physical realms to safeguard your
artistic heritage. Experience peace of mind, effortless accessibility,
and a profound sense of ownership over your creative journey.

<img width="1245" alt="Screen Shot 2023-08-12 at 1 55 13 PM" src="https://github.com/ftairs/behance-scraper/assets/5148240/6ad99e4f-6e3a-471f-8d34-c2368cd765bb">

This project has two parts:

- Scraping Behance for a specific user's data
- A React viewer for seeing that data in 3 formats
- Ability to download scraped data as JSON

## Why does this exist?

As data ownership become more important, the ability to gather your data becomes important. Currently behance does not support any API and has no way to export your information. As a designer and developer there seemed to be a need for people to be able to pull their entire Behance portfoio in an instant.

## Who should use this?

This project is made to help designers but does require a basic knowledge of npm and the terminal. Though you don't have to write any code, setting up requires the ability to install npm packages, adjust a single config setting, run the scraper script and start the react viewer. Future plans are to have a hosted app that can simpley have an username inserted and it handles the rest.

## So how do I use it?

1. Pull the repo
2. Install packages in the main directory and the client directory, where the react project is located.
3. Open `./config.js` and adjust the username on line 1.
4. `cd` into the api directory and run `node server.js`
5. Open another terminal
6. `cd` into the client directory and run `npm start`
7. View the React app and imput a username. The data will be scraped and viewing options will appear.
9. Check it out!

## So now what?

That is completely up to you. You can use it for safe keeping, backing it up regularly. You could also use it in your own app or portfolio.

## Will the evolve?

Currently I'm planning to add the following:

- Localizing images
- Single command installs
- Single command build and start
- Search from the UI

### Tech Used

- Javascript
- NodeJS
- React
- Axios
- Superagent (to replace Axios in future)
- Cheerio
- ChakraUI

# Behance Web Scraper

Discover the freedom of owning your creative data with BeScrape - a
tool that merges the digital and physical realms to safeguard your
artistic heritage. Experience peace of mind, effortless accessibility,
and a profound sense of ownership over your creative journey.

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
4. Open the terminal on the main directory and run `node scrape.js`
5. Wait for the files to write
6. Change directory to client, using `cd client`
7. Start the viewer with `npm start`
8. The viewer should open in your default browser
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

# Welcome to the App Seriesly - Capstone Project

### This is a capstone project for the web development bootcamp of [neuefische](https://www.neuefische.de/)

With Seriesly you can keep track of your watch progress in over 7000 series.

- You can search for series,
- add them to your list of currently watched series,
- mark every episode as watched to never forget again where you left of.

## How to and navigation

When you open [Seriesly](seriesly.vercel.app) you will start at the Home page and see a list of 20 popular series. You can log in (with either Google or GitHub) and thus save your watched series as well as episodes in a database.

There are several ways of navigating through Seriesly:

- By clicking on the arrow on any series, you are able to navigate to a more detailed view for that particular series.
- At the bottom of every page, there is a navigation bar with which you can quickly go to either Search, Home or Watching.

### Detail View

When in the so called Detail View, you may add the respective series to your Watching list.
Another click on this button will remove said series from your Watching list.

By clicking on any of the seasons, a list of episodes from that season will expand.
Those episodes can be marked as watched to keep track of your progress.

### Search

By navigating to the Search page, you can search for new and exiting series. You enter a search term :)

### Watching

By navigating to the Watching page, you will see a list of all the series that you previously marked as being currently watched.

## Tech Stack

- React
- Next.js
- Styled-components
- MongoDB
- mongoose
- Storybook
- SWR
- axios
- Vercel
- TMDB API

## Project Setup

- clone this repository
- run `$ npm install` to install all dependencies
- create `.env.example` in your root folder
- add your API Key from [The Movie Data Base](https://www.themoviedb.org/)
  - add your `MONGODB_URI`
  - add your `GITHUB_ID`
  - add your `GITHUB_SECRET`
    - to get your `GITHUB_ID` and `GITHUB_SECRET` follow this [Guide](https://next-auth.js.org/providers/github)
  - add your `GOOGLE_CLIENT_ID`
  - add your `GOOGLE_CLIENT_SECRET`
    - to get your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` follow this [Guide](https://next-auth.js.org/providers/google)
  - add your `NEXTAUTH_URL`
  - add your `NEXTAUTH_SECRET`
- run `$ npm run dev` to see app in development mode
- run tests with `$ npm run test`
- run storybook with `$ npm run storybook`

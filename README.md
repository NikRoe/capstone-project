# Welcome to the App Seriesly - Capstone Project

### This is a capstone project for the web development bootcamp of [neuefische](https://www.neuefische.de/)

With Seriesly you can keep track of your watch progress in around 7000 series.

- You can search for series,
- add them to your list of currently watching series,
- mark episodes as watched to never forget again where you left of.

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

- [React](https://react.dev/) – The JavaScript library for building user
  interfaces.
- [Next.js](https://nextjs.org/) – The React framework used for development.
- [styled-components](https://styled-components.com/) – CSS-in-JS library for
  styling components.
- [SWR](https://swr.vercel.app/) – Data fetching and state management
- [MongoDB](https://www.mongodb.com/) – The database used for persisting todos.
- [TMDB API](https://developer.themoviedb.org/docs/getting-started) – The API
  used for fetching movie and TV show data.

## Project Setup

1. Clone the repository:

```bash
git clone git@github.com:NikRoe/capstone-project.git
cd capstone-project
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

- Create a `.env.local` file in the root directory of the project.

- Add the following variables to `.env.local`:

```env
TMDB_API_KEY=your_tmdb_api_key
MONGODB_URI=your_mongodb_uri
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=your_nextauth_url
NEXTAUTH_SECRET=your_nextauth_secret
```

- Get your API keys and credentials:

  - TMDB API Key: Obtain it from
    [The Movie Data Base](https://www.themoviedb.org/).
  - GitHub ID & Secret: follow this
    [guide](https://next-auth.js.org/providers/github) to retrieve them.
  - Google Client ID & Secret: Follow this
    [guide](https://next-auth.js.org/providers/google) to generate them.

4. Run the project:

```bash
npm run dev
```

import axios from "axios";

export default async function getSeriesBySearch(req, res) {
  console.log(req.query);
  const URL = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY}&language=en-US&page=1&query=${req.query.searchTerm}`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data });
}

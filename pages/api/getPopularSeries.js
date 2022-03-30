import axios from "axios";

export default async function getPopularSeries(req, res) {
  const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data });
}

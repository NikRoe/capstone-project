import axios from "axios";

export default async function getSeriesById(req, res) {
  const URL = `https://api.themoviedb.org/3/tv/${req.query.id}/season/${req.query.season}?api_key=${process.env.API_KEY}&language=en-US&page=1`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data });
}

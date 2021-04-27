import { KEY } from "./secret"

const requests = {
  getPopularMovie: `movie/popular?api_key=${KEY}&language=en-US&page=1`,
  getPopularTv: `tv/popular?api_key=${KEY}&language=en-US&page=1`,
  getTopRatedMovie: `movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  getTopRatedTv: `tv/top_rated?api_key=${KEY}&language=en-US&page=1`,
  getTrendingDay: `trending/all/day?api_key=${KEY}`,
  getTrendingMovieDay: `trending/movie/day?api_key=${KEY}`,
  getTrendingTvDay: `trending/tv/day?api_key=${KEY}`,
  getTrendingWeek: `trending/all/week?api_key=${KEY}`,
  getTrendingMovieWeek: `trending/movie/week?api_key=${KEY}`,
  getTrendingTvWeek: `trending/tv/week?api_key=${KEY}`,
};

export default requests;

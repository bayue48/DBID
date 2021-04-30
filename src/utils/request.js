import { KEY } from "./secret"

const requests = {
  getPopularMovie: `movie/popular?api_key=${KEY}&language=en-US&page=1`,
  getTopRatedMovie: `movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  getTrendingMovieDay: `trending/movie/day?api_key=${KEY}`,
  getTrendingMovieWeek: `trending/movie/week?api_key=${KEY}`,
  getNewMovie: `discover/movie?api_key=${KEY}&language=en-US&sort_by=vote_count.desc`
};

export default requests;

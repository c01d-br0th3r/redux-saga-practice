import axios from "axios";

const getMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=e6e0dd53c79220875187320b4265f3d6&language=en-US&page=1`
  );
};

export default getMovies;

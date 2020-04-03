const fetchPopular = () => {
  return {
    type: "FETCH_POPULAR"
  };
};

const saveFetchPopular = movies => {
  return {
    type: "FETCH_POPULAR_MOVIES",
    movies
  };
};

export default { fetchPopular, saveFetchPopular };

/*const fetchPopularMovies = data => {
  return {
    type: "FETCH_POPULAR",
    data
  };
};

const fetchingPopularMovies = () => async dispatch => {
  try {
    const {
      data: { results }
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e6e0dd53c79220875187320b4265f3d6&language=en-US&page=1`
    );
    dispatch(fetchPopularMovies(results));
  } catch (error) {
    throw error;
  }
};

const fetchingPopularMovies = () => {
  return dispatch => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e6e0dd53c79220875187320b4265f3d6&language=en-US&page=1`
      )
      .then(response => {
        dispatch(fetchPopularMovies(response.data.results));
      })
      .catch(error => {
        throw error;
      });
  };
};

export default { fetchingPopularMovies, fetchPopularMovies };*/

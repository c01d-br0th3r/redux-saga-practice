const popularMovies = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR_MOVIES":
      return [...state, ...action.movies];
    default:
      return state;
  }
};

export default popularMovies;

import { takeEvery, put, call } from "redux-saga/effects";
import allActions from "../actions";
import axios from "axios";
import getMovies from "../api";

function* workerSaga() {
  console.log("Hello worker!");
  try {
    const {
      data: { results }
    } = yield call(getMovies);
    console.log(results);
    yield put(allActions.popularMoviesActions.saveFetchPopular(results));
  } catch (error) {
    /*try {
    const {
      data: { results }
    } = yield axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e6e0dd53c79220875187320b4265f3d6&language=en-US&page=1`
    );
    console.log(results);
    yield put(allActions.popularMoviesActions.saveFetchPopular(results));
  }*/ yield error;
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_POPULAR", workerSaga);
}

export default rootSaga;

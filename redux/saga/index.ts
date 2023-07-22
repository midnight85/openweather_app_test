import {call, fork, put, takeEvery} from 'redux-saga/effects';
import {fetchCurrentWeather, fetchForecast} from './api';
import {
  setWeather,
  setWeatherError,
  setWeatherLoading,
} from '../store/weatherSlice';
import {
  setForecast,
  setForecastError,
  setForecastLoading,
} from '../store/forecastSlice';
import {IWeather} from '../../types/weather';
import {IForecast} from '../../types/forecast';
import {FETCH_DATA} from '../actions';

function* getCurrentWeather() {
  try {
    yield put(setWeatherLoading());
    const data: IWeather = yield call(fetchCurrentWeather);
    yield put(setWeather(data));
  } catch (error) {
    yield put(setWeatherError('Weather fetching error'));
  }
}

function* getForecast() {
  try {
    yield put(setForecastLoading());
    const data: IForecast = yield call(fetchForecast);
    yield put(setForecast(data));
  } catch (error) {
    yield put(setForecastError('Forecast fetching error'));
  }
}

function* watchFetchData() {
  yield fork(getCurrentWeather);
  yield fork(getForecast);
}

export function* rootSaga() {
  yield watchFetchData();
  yield takeEvery(FETCH_DATA, watchFetchData);
}

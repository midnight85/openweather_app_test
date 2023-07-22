import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from './weatherSlice';
import forecastReducer from './forecastSlice';
import {rootSaga} from '../saga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
});
export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type TypedDispatch = typeof store.dispatch;

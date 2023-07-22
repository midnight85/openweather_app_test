import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IWeather} from '../../types/weather';

interface WeatherState {
  isLoading: boolean;
  weather: IWeather;
  error: string | null;
}

const initialState: WeatherState = {
  isLoading: false,
  weather: {} as IWeather,
  error: null,
};

const weather = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherLoading: state => {
      state.error = null;
      state.isLoading = true;
    },
    setWeather: (state, action: PayloadAction<IWeather>) => {
      state.isLoading = false;
      state.weather = action.payload;
    },
    setWeatherError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {setWeatherLoading, setWeather, setWeatherError} = weather.actions;
export default weather.reducer;

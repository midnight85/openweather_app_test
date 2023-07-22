import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ForecastListItem,
  FormattedForecastList,
  IForecast,
} from '../../types/forecast';

interface ForecastState {
  isLoading: boolean;
  forecast: FormattedForecastList;
  error: string | null;
}

const initialState: ForecastState = {
  isLoading: false,
  forecast: {},
  error: null,
};
const forecast = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setForecastLoading: state => {
      state.error = null;
      state.isLoading = true;
    },
    setForecast: (state, action: PayloadAction<IForecast>) => {
      const {list} = action.payload;
      state.forecast = list.reduce(
        (acc: FormattedForecastList, obj: ForecastListItem) => {
          const [date] = obj.dt_txt.split(' ');
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push({...obj});
          return acc;
        },
        {},
      );
      state.isLoading = false;
    },
    setForecastError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {setForecastLoading, setForecast, setForecastError} =
  forecast.actions;
export default forecast.reducer;

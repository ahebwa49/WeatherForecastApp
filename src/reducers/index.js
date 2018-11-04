import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather_list';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;

import axios from "axios";

const API_KEY = "b7fd01992e7b09f3a790d13408451354";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// used in reducers
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // promised returned here
  const request = axios.get(url);

  return {
    // keep action types consistent
    type: FETCH_WEATHER,
    // promised returned to payload
    // goes to reducers
    payload: request
  };
}

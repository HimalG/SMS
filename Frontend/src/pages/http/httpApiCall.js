import axios from "axios";
import { baseUrl } from "./_config";

// export const httpGetWeatherData = () => axios.get(baseUrl+'/WeatherForecast');
export const httpGetStudentInfo = () => axios.get(baseUrl+'/StudentApi')
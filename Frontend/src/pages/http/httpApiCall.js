import axios from "axios";
import { baseUrl } from "./_config";

// export const httpGetWeatherData = () => axios.get(baseUrl+'/WeatherForecast');
 export const httpGetStudentInfo = () => axios.get(baseUrl+'/StudentApi')
//export const httpGetStudentInfo = () => axios.get(baseUrl+'/student/list'+"?query="+"ab"+"&pageNo=1"+"&pageSize=20")
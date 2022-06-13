import axios from "axios";
import { API_KEY } from "../utilities/Setting/config";
import { baseService } from "./BaseServices";

class WeatherServices extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }
    getWeatherInfor(cityName) {
        return axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        })
    }
}


export const weatherService = new WeatherServices()
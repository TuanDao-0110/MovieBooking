import { weatherService } from "../../Services/WeatherServices"
import { WEATHER_REDUCER } from "../type/WeatherType"

export const weatherInforAction = (cityName) => {
    return async dispatch => {
        try {
            const result = await weatherService.getWeatherInfor(cityName)
            console.log(result.data)
             dispatch({
                type: WEATHER_REDUCER,
                result: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
import { act } from "react-dom/test-utils"
import { WEATHER_REDUCER } from "../type/WeatherType"

const initialState = {
    weatherInfor: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case WEATHER_REDUCER:
            return { ...state, weatherInfor: action.result }

        default:
            return state
    }
}

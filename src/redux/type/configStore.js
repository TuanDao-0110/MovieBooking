import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "../Reducer/CarouselReducer";
import { TheatherManageReducer } from '../Reducer/TheatherManageReducer'
import { MovieListReducer } from "../Reducer/MovieListReducer";
import { TicketBookingReducer } from '../Reducer/TicketBookingManagerReducer'
import { UserReducer } from "../Reducer/UserReducer";
import LoadingReducer from "../Reducer/LoadingReducer";
import WeatherReducer from "../Reducer/WeatherReducer";
const rootReducer = combineReducers({
    CarouselReducer,
    MovieListReducer,
    TheatherManageReducer,
    TicketBookingReducer,
    UserReducer,
    LoadingReducer,
    WeatherReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))
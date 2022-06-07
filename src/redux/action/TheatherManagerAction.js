import { theaterManagerServices } from "../../Services/TheaterManagerServices"
import { CLOSE_LOADING, MOVIE_CALENDER_INFOR, OPEN_LOADING, THEATHER_CALENDAR_INFOR } from "../type/MovieManagerType"

export const tookInforTheather = () => {
    return async dispatch => {
        try {
            const result = await theaterManagerServices.inforCalenderTheather()
            dispatch({
                type: THEATHER_CALENDAR_INFOR,
                theatherList: result.data.content,
            })
        } catch (error) {
            console.log('error :', error)
        }
    }
}


export const tookMovieCalender = (movieId) => {

    return async dispatch => {
        dispatch({
            type: OPEN_LOADING
        })
        try {
            const result = await theaterManagerServices.infoMovieCalender(movieId)
            console.log('took movie')
            await dispatch({
                type: MOVIE_CALENDER_INFOR,
                filmDetails: result.data.content
            })
            dispatch({
                type: CLOSE_LOADING
            })
        } catch (error) {
            dispatch({
                type: CLOSE_LOADING
            })
        }
    }
}


export async function tookStateInfor() {

    try {

        let result = await theaterManagerServices.inforWholeStateSystem()

        return result.data.content
    } catch (error) {
        console.log(error.response)
    }

}

export async function tookInforStateLocation(stateId) {
    try {

        let result = await theaterManagerServices.inforStateLocation(stateId)
        console.log(result)
        return result.data.content
    } catch (error) {
        console.log(error.response)
    }
}
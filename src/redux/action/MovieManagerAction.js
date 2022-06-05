import { history } from "../../App"
import { movieManagerService } from "../../Services/MovieManagerService"
import { FILM_INFOR_ADMIN, GET_MOVIE_LIST } from "../type/MovieManagerType"

export const takeFilmAction = () => {
    return async (dispatch) => {
        try {
            const result = await movieManagerService.getMovieList()
            dispatch({
                type: GET_MOVIE_LIST,
                movieList: result.data.content
            })
        } catch (error) {

        }
    }

}


export const uploadFilmAction = (formData) => {
    return async dispatch => {
        try {
            const result = await movieManagerService.uploadPhim(formData)
            alert('Upload Success')
            console.log(result)
            history.push('/admin/film')
        } catch (error) {
            console.log(error.response.data)
        }
    }
}
export const filmInforAdminAction = (filmId) => {
    return async dispatch => {
        try {
            const result = await movieManagerService.inforFilmForAdmin(filmId)
            console.log(result)
            dispatch({
                type: FILM_INFOR_ADMIN,
                filmDetailsForAdmin: result.data.content
            })
        } catch (error) {

        }
    }
}


export const updateFilmAdmin = (filmModel) => {

    return async (dispatch) => {

        try {
            const result = await movieManagerService.updateFilmForAdmin(filmModel)
            console.log(result)
            alert('Update Success')
            history.push('/admin/film')
        } catch (error) {
            console.log(error.response)
            alert( error.response.data.content)
        }
    }
}


export const deleteFilmAdmin = (filmId) => {
    return async dispatch => {
        try {
            console.log('done')
            const result = await movieManagerService.deleteFilmAdmin(filmId)
            alert('Delete Done')
            window.location.reload()
        } catch (error) {
            console.log(error.response)
        }

    }
}


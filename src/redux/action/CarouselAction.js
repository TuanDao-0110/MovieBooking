import axios from "axios"
import { movieManagerService } from "../../Services/MovieManagerService"
import { DOMAIN } from "../../utilities/Setting/config"
import { SET_CAROUSEL } from "../type/CarouselType"
export const getCarouselAction =  () => {
 return async (dispatch)=>{  try {
        const result = await movieManagerService.getMovieBanner()

        dispatch({
            type: SET_CAROUSEL,
            listMovie: result.data.content
        })
    } catch (error) {

    } }
}
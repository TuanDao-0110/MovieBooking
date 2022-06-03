import { bookingManagerService } from "../../Services/BookingManagerServices"
import { BOOKING_SEAT_REDUCER, BOOKING_SEAT_REMOVE_REDUCER, CLOSE_LOADING, CONFIRM_BOOKING_REDUCER, OPEN_LOADING, SWITCH_TAB, TICKET_INFOR_REDUCER } from "../type/MovieManagerType";
import { FILM_INFOR, SUCCESS } from "../type/utility";
import { ACCOUNT } from "../../utilities/Setting/config";
import { history } from "../../App";
export const takingBookingTicketAction = (bookingId) => {

    return async dispatch => {
        try {
            dispatch({
                type: OPEN_LOADING
            })
            const result = await bookingManagerService.getBookingDetailService(bookingId);

            dispatch({
                type: TICKET_INFOR_REDUCER,
                detailsTicketBooking: result.data.content
            })
            dispatch({
                type: CLOSE_LOADING
            })

        } catch (error) {
            alert('')
            dispatch({
                type: CLOSE_LOADING
            })
        }
    }
}


export const postBookingTicketAction = (bookingModel) => {
    return async dispatch => {
        try {
            dispatch({
                type: OPEN_LOADING
            })
            const result = await bookingManagerService.postBookingDetailService(bookingModel)
            if (result.status === SUCCESS) {
                dispatch({
                    type: CONFIRM_BOOKING_REDUCER
                })
                await dispatch(takingBookingTicketAction(bookingModel.maLichChieu));

                await dispatch({
                    type: CLOSE_LOADING
                })
                alert('BOOKING DONE')
                dispatch({
                    type: SWITCH_TAB
                })
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: CLOSE_LOADING
            })
        }
    }
}



export const bookingAction = (seat, movieCalendarId,) => {
    // console.log('seat',seat)
    return async (dispatch, getState) => {
        // send infor to local reducer
        await dispatch({
            type: BOOKING_SEAT_REDUCER,
            bookingSeat: { 'maGhe': seat.maGhe, 'stt': seat.stt, 'giaVe': seat.giaVe }
        })
        // call API to back-end
        let presentBookingSeatArr = getState().TicketBookingReducer.presentBookingSeatArr
        let account = JSON.parse(localStorage.getItem(ACCOUNT)).taiKhoan
        console.log('detai', presentBookingSeatArr)
        //call API signlR ==> this will be send to back-end though TCL in case some thing change
        // connection.invoke('datGhe', account, JSON.stringify(presentBookingSeatArr), movieCalendarId)
    }
}



export const removeBookingAction = (seat, movieCalendarId,) => {
    return async (dispatch, getState) => {
        // send infor to local reducer


        await dispatch({
            type: BOOKING_SEAT_REMOVE_REDUCER,
            seatId: seat.maGhe
        })
        // call API to back-end
        let presentBookingSeatArr = getState().TicketBookingReducer.presentBookingSeatArr
        let account = JSON.parse(localStorage.getItem(ACCOUNT)).taiKhoan
        // console.log('detai', account)
        //call API signlR ==> this will be send to back-end though TCL in case some thing change
        // connection.invoke('datGhe', account, JSON.stringify(presentBookingSeatArr), movieCalendarId)
    }
}



export async function createNewFilmCalender(filmCalender) {
    try {
        const result = await bookingManagerService.postNewFimCalenderAdminService(filmCalender)
        console.log(result)
        if (result.status === 200) {
            localStorage.setItem(FILM_INFOR, '')
            if (window.confirm('move to to film')) {
                history.push('/admin/film')
            }
        }
    } catch (error) {
        console.log(error.response)
    }
}

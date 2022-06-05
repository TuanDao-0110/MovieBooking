import { ACTIVE_CHANGE, BOOKING_SEAT_REDUCER, BOOKING_SEAT_REMOVE_REDUCER, CONFIRM_BOOKING_REDUCER, ORDER_BOOKING_FROM_SERVER, REMOVE_ALL_TEMP_BOOKING, SWITCH_TAB, TICKET_INFOR_REDUCER, } from "../type/MovieManagerType"
import { modelDetailsTicketBooking } from "../../__core/Models/DetailsTicketBooking"
import _ from 'lodash'
const newModel = new modelDetailsTicketBooking()

const initialState = {
    detailsTicketBooking: newModel.detailsTicketBooking,
    detailsSeatBooking: newModel.seat,
    presentBookingSeatArr: [],
    tabActive: '1',
    // this list present in case other customer is choosing on the same time
    listUnvailableSeat: []
}

export const TicketBookingReducer = (state = initialState, action) => {
    switch (action.type) {

        case TICKET_INFOR_REDUCER:
            return { ...state, detailsTicketBooking: action.detailsTicketBooking.thongTinPhim, detailsSeatBooking: action.detailsTicketBooking.danhSachGhe }
        case BOOKING_SEAT_REDUCER:
            state.presentBookingSeatArr.push(action.bookingSeat)
            return { ...state, }
        case ORDER_BOOKING_FROM_SERVER:
            return { ...state, listUnvailableSeat: action.listUnvailableSeat }
        case BOOKING_SEAT_REMOVE_REDUCER:
            let index = state.presentBookingSeatArr.findIndex((seat) => seat.maGhe === action.seatId)
            state.presentBookingSeatArr.splice(index, 1)
            return { ...state }
        case CONFIRM_BOOKING_REDUCER:
            state.presentBookingSeatArr.splice(0)
            return { ...state }
        case SWITCH_TAB:
            return { ...state, tabActive: '2' }
        case ACTIVE_CHANGE:
            return { ...state, tabActive: action.number }
        case REMOVE_ALL_TEMP_BOOKING:
            return { ...state, presentBookingSeatArr: [] }
        default:
            return state
    }
}

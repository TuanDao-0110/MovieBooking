import { CLOSE_MODAL_BOOKING_DETAILS, OPEN_MODAL_BOOKING_DETAILS, USER_BOOKING_INFOR_REDUCER, USER_REDUCER } from "../type/MovieManagerType"

const initialState = {
    userInfor: {},
    bookingInforUser: [],
    modalBookingSeat: [],
    modalToogle: false
}
export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case USER_REDUCER:
            return { ...state, userInfor: action.userInfor }
        case USER_BOOKING_INFOR_REDUCER:

            return { ...state, bookingInforUser: action.bookingInforUser }
        case OPEN_MODAL_BOOKING_DETAILS:
            return { ...state, modalToogle: true, modalBookingSeat: action.modalBookingSeat }
        case CLOSE_MODAL_BOOKING_DETAILS:
            return { ...state, modalToogle: false, }
        default:
            return state
    }
}

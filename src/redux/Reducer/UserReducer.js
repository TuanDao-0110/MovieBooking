import { CLOSE_MODAL_BOOKING_DETAILS, OPEN_MODAL_BOOKING_DETAILS, REMOVE_ALL_USER_INFOR, USER_BOOKING_INFOR_REDUCER, USER_REDUCER } from "../type/MovieManagerType"

const initialState = {
    userInfor: {},
    bookingInforUser: [],
    modalBookingSeat: [],
    modalToogle: false,
    userProfile: {},
}
export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case USER_REDUCER:
            return { ...state, userInfor: action.userInfor }
        case USER_BOOKING_INFOR_REDUCER:

            return { ...state, bookingInforUser: action.bookingInforUser, userProfile: action.userProfile }
        case OPEN_MODAL_BOOKING_DETAILS:
            return { ...state, modalToogle: true, modalBookingSeat: action.modalBookingSeat }
        case CLOSE_MODAL_BOOKING_DETAILS:
            return { ...state, modalToogle: false, }
        case REMOVE_ALL_USER_INFOR:
            return { ...state, userInfor: {}, bookingInforUser: [], modalBookingSeat: [], userProfile: {} }
        default:
            return state
    }
}

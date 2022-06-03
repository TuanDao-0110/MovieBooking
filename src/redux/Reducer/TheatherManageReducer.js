import { THEATHER_CALENDAR_INFOR } from "../type/MovieManagerType"

const initialState = {
    theatherList: [2]
}

export const TheatherManageReducer = (state = initialState, action) => {
    switch (action.type) {

        case THEATHER_CALENDAR_INFOR:

            return { ...state, theatherList: action.theatherList }

        default:
            return state
    }
}


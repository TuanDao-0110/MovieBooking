import { CLOSE_LOADING, OPEN_LOADING, } from "../type/MovieManagerType"

const initialState = {
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case OPEN_LOADING:
            return { ...state, loading: true }
        case CLOSE_LOADING:
            return { ...state, loading: false }
        default:
            return state
    }
}

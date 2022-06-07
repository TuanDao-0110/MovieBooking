import { managerUserService } from "../../Services/ManagerUserService"
import { ACCOUNT, NAME_USER, TOKEN } from "../../utilities/Setting/config"
import { FORBIDDEN, SUCCESS, USER_LOG_IN } from "../type/utility"
import { history } from "../../App"
import { CLOSE_LOADING, OPEN_LOADING, USER_BOOKING_INFOR_REDUCER, USER_REDUCER } from "../type/MovieManagerType"

export const UserManagerAction = (dataUser) => {
    return async dispatch => {
        try {
            const result = await managerUserService.loginUser(dataUser)
            if (result.status === SUCCESS) {
                localStorage.setItem(TOKEN, result.data.content.accessToken)

                localStorage.setItem(ACCOUNT, JSON.stringify(result.data.content))
                dispatch({
                    type: USER_REDUCER,
                    userInfor: JSON.parse(localStorage.getItem(ACCOUNT))
                })

                history.push('/')
            }
        } catch (error) {
            alert(error.response.statusText)
            console.log(error.response)
        }
    }
}

export const logUpUserAction = (dataUser) => {
    return async dispatch => {
        try {
            const result = await managerUserService.logUpUser(dataUser)
            console.log(result)
            if (result.status === SUCCESS) {
                if (window.confirm("Sign Up Success , Do You Want Login In")) {
                    dispatch(UserManagerAction(dataUser))
                }
            }
        } catch (error) {
            alert(error.response.statusText)
            console.log(error.response)
        }
    }
}



export const userManagerBookingInfo = () => {

    return async dispatch => {
        dispatch({
            type: OPEN_LOADING
        })
        try {
            const result = await managerUserService.postUserBookingInfor()
          await  dispatch({
                type: USER_BOOKING_INFOR_REDUCER,
                bookingInforUser: result.data.content.thongTinDatVe,
                userProfile: result.data.content
            })
          await  dispatch({
                type: CLOSE_LOADING
            })
        } catch (error) {
            alert(error.response.statusText)
            console.log(error.response)
            dispatch({
                type: CLOSE_LOADING
            })
        }
    }
}



export async function takeUserListAction() {
    try {
        const result = await managerUserService.takeUserList()

        return result
    } catch (error) {
        alert(error.response.statusText)
        console.log(error.response)
    }
}


export async function searchUserAction(searchKey) {
    try {
        const result = await managerUserService.searchingUserService(searchKey)
        console.log(result)
        return result.data.content
    } catch (error) {
        alert(error.response.statusText)
        console.log(error.response)
    }
}


export async function addNewUserAction(userModel, dispatch) {
    dispatch({
        type: OPEN_LOADING
    })
    try {
        const result = await managerUserService.addUserService(userModel)
        console.log(result)

        if (result.status === SUCCESS) {
            alert("Add New User Success")

            history.push('/admin/users')

        }
        dispatch({
            type: CLOSE_LOADING
        })
    } catch (error) {
        alert(error.response.statusText)
        console.log(error.response)
        dispatch({
            type: CLOSE_LOADING
        })
    }
}


export async function deleteUserAction(discriptionKey, dispatch) {
    dispatch({
        type: OPEN_LOADING
    })
    try {
        if (window.confirm('Do You Want To Delete this Account')) {

            const result = await managerUserService.deleteAcountService(discriptionKey)
            alert("Delete Success")
            window.location.reload()
            dispatch({
                type: CLOSE_LOADING
            })
        }
    } catch (error) {
        alert(error.response.statusText)
        console.log(error.response)
        dispatch({
            type: CLOSE_LOADING
        })
    }
}




export async function editUserAction(userModel, dispatch) {
    dispatch({
        type: OPEN_LOADING
    })
    try {
        const result = await managerUserService.editAccountService(userModel)
        console.log(result)
        if (result.status === FORBIDDEN) {
            alert("Forbidden")
        }
        if (result.status === SUCCESS) {
            alert("Edit User Success")

            history.push('/admin/users')

        }
        dispatch({
            type: CLOSE_LOADING
        })
    } catch (error) {
        alert(error.response.statusText)
        console.log(error.response)
        dispatch({
            type: CLOSE_LOADING
        })
    }
}
import { useEffect } from "react"
import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"
import { USER_LOG_IN } from "../../redux/type/utility"
import { ACCOUNT } from "../../utilities/Setting/config"


const CheckOutTemplate = (props) => {
    const { Component, ...restRoute } = props // props = path, exact vs Component


    useEffect(() => {
        window.scrollTo(0, 0)
    })
    if (!localStorage.getItem(ACCOUNT)) {
        return <Redirect to='/login'></Redirect>
    }

    return (
        <Route {...restRoute} render={(propsRoute) => { // propsRoute = props.location, props.history,props.match ....  (propsRoute property is return from Route)
            return <>

                <Component {...propsRoute}></Component>

            </>
        }}></Route>
    )

}


export default CheckOutTemplate;
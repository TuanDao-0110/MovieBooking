import { Route } from "react-router-dom"
import Footer from "./Layout/Footer/Footer"
import { Header } from "./Layout/Header/Header"
import { Suspense, useEffect } from 'react'

export const HomeTemplate = (props) => {
    const { Component, ...restRoute } = props // props = path, exact vs Component
    useEffect(() => {
        window.scrollTo(0, 0)
    },)
    return (
        <Route {...restRoute} render={(propsRoute) => { // propsRoute = props.location, props.history,props.match ....  (propsRoute property is return from Route)
            return <>
                <Suspense fallback='loading'>

                    <Header ></Header>
                </Suspense>
                {/* <HomeCarouselAnt></HomeCarouselAnt> */}
                <Component {...propsRoute}></Component>
                <Footer></Footer>
            </>
        }}></Route>
    )
}

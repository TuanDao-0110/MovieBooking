import { Route } from "react-router-dom"
import { Header } from "./Layout/Header/Header"
import { Suspense, useEffect } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next';
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { ACCOUNT } from "../../utilities/Setting/config";
import style from './HomeTemplate.module.scss'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { ADMIN } from "../../redux/type/utility";
import { Avatar } from "antd";

import { Popover, Button } from 'antd';
import { CLOSE_LOADING, OPEN_LOADING } from "../../redux/type/MovieManagerType";
import { history } from "../../App";
import { userManagerBookingInfo } from "../../redux/action/UserManagerAction";

export const HomeTemplate = (props) => {
    const { Component, ...restRoute } = props // props = path, exact vs Component
    let account = '';
    let name = '';
    let newemail = '';
    let userType = '';
    // eslint-disable-next-line no-unused-expressions
    if (!_.isEmpty(localStorage.getItem(ACCOUNT))) {
        let { taiKhoan, hoTen, email, maLoaiNguoiDung } = JSON.parse(localStorage.getItem(ACCOUNT))
        account = taiKhoan
        name = hoTen
        newemail = email
        userType = maLoaiNguoiDung
    }

    const dispath = useDispatch()
    useEffect(() => {
        dispath({
            type: OPEN_LOADING
        })
        dispath(userManagerBookingInfo())

        window.scrollTo(0, 0)
        setTimeout(() => {
            dispath({
                type: CLOSE_LOADING
            })
        }, 1000);
    })

    const content = (
        <div>

            {(!_.isEmpty(localStorage.getItem(ACCOUNT))) ?
                <>
                    <p className="hover:bg-blue-300 duration-75 cursor-pointer w-full" onClick={async () => {
                        dispath({
                            type: OPEN_LOADING
                        })
                        try {
                            localStorage.clear()
                            history.push('/')
                            setTimeout(() => {
                                dispath({
                                    type: CLOSE_LOADING
                                });
                            }, 2000);
                            window.location.reload()
                        } catch (error) {

                        }
                    }}> Sign Out</p>
                    <p className="hover:bg-blue-300 duration-75 cursor-pointer w-full" onClick={() => {
                        history.push('/profile')
                    }}>Profile</p> </> :
                <p className="hover:bg-blue-300 duration-75 cursor-pointer w-full" onClick={() => {
                    history.push('/login')
                }}>Sign In</p>}
        </div>
    );
    return (
        <Route {...restRoute} render={(propsRoute) => { // propsRoute = props.location, props.history,props.match ....  (propsRoute property is return from Route)
            return <>
                <Suspense fallback='loading'>

                    <section className={`${style['banner']}`} >
                        <Component {...propsRoute}></Component>

                        <label for="menu-control" className={`${style['hamburger']}`}>
                            <i className={`${style['hamburger__icon']}`}></i>
                            <i className={`${style['hamburger__icon']}`}></i>
                            <i className={`${style['hamburger__icon']}`}></i>
                        </label>

                        <input type="checkbox" id="menu-control" className={`${style['menu-control']}`} />

                        <aside className={style.sidebar}>

                            <nav className={style.sidebar__menu}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                                <NavLink to="/new">New</NavLink>
                                {userType === ADMIN ? <NavLink to="/admin">Admin</NavLink> : ''}

                                {/* <NavLink to="/detail/:">Home</NavLink> */}

                            </nav>

                            <label for="menu-control" className={`${style['sidebar__close']}`}></label>

                            <ul className={`${style['sidebar__social']} mb-10`}>
                                <li>
                                    <div className="text-red-500 text-4xl cursor-pointer">
                                        <Popover content={content} title="">

                                            Hello! {!_.isEmpty(localStorage.getItem(ACCOUNT)) ? <Avatar size={64} className='text-2xl'>{name.slice(0, 2)}</Avatar> : <Avatar size={64}>Guest</Avatar>}
                                        </Popover>
                                    </div>

                                </li>

                            </ul>
                        </aside>
                    </section>
                </Suspense>
                {/* <Component {...propsRoute}></Component> */}
                {/* <Header></Header> */}
                {/* <HomeCarouselAnt></HomeCarouselAnt> */}
                {/* <Footer></Footer> */}
            </>
        }}></Route>
    )
}

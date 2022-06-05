/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import React, { useState, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'
import { useTranslation } from 'react-i18next';
import { ACCOUNT } from '../../../../utilities/Setting/config'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { REMOVE_ALL_USER_INFOR } from '../../../../redux/type/MovieManagerType'
import { ADMIN } from '../../../../redux/type/utility'
import { Alert } from 'antd';

export function Header(props) {
    const { t, i18n, ready } = useTranslation();
    const [visible, setVisile] = useState(true)
    const [adminAlert, setAdminAlert] = useState(false)
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
    return (
        <header header className="p-4 bg-gray-800/80 text-gray-100 fixed w-full z-20 " >
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to={'/'} href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img className='w-full h-full' src='data:image/png;base64,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' alt=''></img>
                </NavLink>
                {/* 1. Menu Film */}
                <ul className="items-stretch hidden space-x-3 sm:flex">
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 border-b-2  border-transparent text-white " activeClassName='border-b-1 border-white' >Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/contact' className="flex items-center px-4 -mb-1 border-b-2 border-transparent  text-white " activeClassName='border-b-1 border-white'>Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/new" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white" activeClassName='border-b-1 border-white'>New</NavLink>
                    </li>
                    {userType === ADMIN ? <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/admin" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white" activeClassName='border-b-1 border-white'>Admin Films</NavLink>
                    </li> : <li className='flex'><a className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white" onClick={() => { setAdminAlert(!adminAlert) }}>admin</a> </li>}
                    {adminAlert ? alert('For Admin Only !!') : ''}
                </ul>
                {/* Account Control lg-screen */}
                <div className="items-center flex-shrink-0 sm:hidden  lg:flex ">

                    <div className='relative  items-center flex' onMouseOver={() => {
                        setVisile(false)
                    }} onMouseLeave={() => {
                        setVisile(true)
                    }}>

                        <span className="p-4 text-rose-300 " >Hello ! {account ? account : '  Guest'} <button >

                            <Avatar style={{ color: 'black', backgroundColor: '#fff' }} className='uppercase'>{name.slice(0, 2)}</Avatar>


                        </button></span>
                        <div className="absolute top-10 right-0 z-20 w-56 py-5 mt-5 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 " style={{ visibility: `${visible ? 'hidden' : ''}` }} >


                            <div className="flex uppercase cursor-pointer items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => history.push('/profile')}>{t('profile')}</div>

                        </div>
                    </div>

                    {account ? <button className="self-center px-8 py-3 font-semibold uppercase rounded dark:bg-violet-400 dark:text-gray-900" onClick={() => {
                        localStorage.clear()
                        dispath({
                            type: REMOVE_ALL_USER_INFOR
                        })
                        history.push('/')
                        // window.location.reload()
                    }} >{t('signout')}</button> : <>
                        <button className="self-center px-8 py-3 rounded uppercase" onClick={() => history.push('/login')} >{t('signin')}</button>

                        <button className="self-center px-8 py-3 rounded uppercase" onClick={() => history.push('/register')} >{t('signup')}</button>
                    </>}

                    <div className="self-center px-5 py-3 " >
                        <Select defaultValue='English' className='w-24' onChange={(e) => {
                            i18n.changeLanguage(e)

                        }} >
                            <Option value='en'>Engish</Option>
                            <Option value='chi'>Chinese</Option>
                            <Option value='suomi'>Finnish</Option>

                        </Select>
                    </div>


                </div>
                <div className='relative lg:hidden items-center flex' onMouseOver={() => {
                    setVisile(false)
                }} onMouseLeave={() => {
                    setVisile(true)
                }}>

                    <span className="p-4  " >hello ! {account}  <button >

                        {/* <img alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-300" src="https://source.unsplash.com/40x40/?portrait?1" /> */}
                        <Avatar style={{ color: 'black', backgroundColor: '#fff' }} className='uppercase'>{name.slice(0, 2)}</Avatar>

                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg> */}
                    </button></span>
                    <div className="absolute top-10 right-0 z-20 w-56 py-5 mt-5 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 " style={{ visibility: `${visible ? 'hidden' : ''}` }} >
                        <div className="flex uppercase cursor-pointer  items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => history.push('/login')} >{t('signin')}</div>
                        <div className="flex uppercase cursor-pointer items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => history.push('/register')}>{t('signup')}</div>
                        <div className="flex uppercase cursor-pointer items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => {

                            localStorage.clear()
                            dispath({
                                type: REMOVE_ALL_USER_INFOR
                            })
                            history.push('/')
                            // window.location.reload()
                        }}>{t('signout')}</div>

                        <div className="flex uppercase cursor-pointer items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => history.push('/profile')}>{t('profile')}</div>

                    </div>
                </div>
            </div>
        </header >
    )
}

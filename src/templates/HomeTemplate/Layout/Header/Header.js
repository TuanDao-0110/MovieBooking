/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import React, { useState, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'
import { useTranslation } from 'react-i18next';
import { ACCOUNT } from '../../../../utilities/Setting/config'
import _ from 'lodash'
export function Header(props) {
    const { t, i18n, ready } = useTranslation();
    const [visible, setVisile] = useState(true)
    let account = '';
    let name = '';
    let newemail = '';
    // eslint-disable-next-line no-unused-expressions
    if (!_.isEmpty(localStorage.getItem(ACCOUNT))) {
        let { taiKhoan, hoTen, email, } = JSON.parse(localStorage.getItem(ACCOUNT))
        account = taiKhoan
        name = hoTen
        newemail = email
    }
    return (
        <header header className="p-4 bg-gray-800/80 text-gray-100 fixed w-full z-20 " >
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to={'/'} href="#" aria-label="Back to homepage" className="flex items-center p-2">
                </NavLink>
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
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/admin" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white" activeClassName='border-b-1 border-white'>Admin Films</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex ">
                    <span>hello ! {account}  <button className="p-4 " >

                        {/* <img alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-300" src="https://source.unsplash.com/40x40/?portrait?1" /> */}
                        <Avatar style={{ color: 'black', backgroundColor: '#fff' }} className='uppercase'>{name.slice(0, 2)}</Avatar>

                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg> */}
                    </button></span>

                    <button className="self-center px-8 py-3 rounded uppercase" onClick={() => history.push('/login')} >{t('signin')}</button>
                    <button className="self-center px-8 py-3 font-semibold uppercase rounded dark:bg-violet-400 dark:text-gray-900" onClick={() => history.push('/register')} >{t('signout')}</button>
                    <button className="self-center px-8 py-3 rounded uppercase" onClick={() => history.push('/register')} >{t('signup')}</button>
                    <div className="self-center px-8 py-3 " >
                        <Select defaultValue='English' className='w-16' onChange={(e) => {
                            i18n.changeLanguage(e)

                        }} >
                            <Option value='en'>Engish</Option>
                            <Option value='chi'>Chinese</Option>
                            <Option value='suomi'>Finnish</Option>

                        </Select>
                    </div>


                </div>
                <div className='relative' onMouseOver={() => {
                    setVisile(false)
                }} onMouseLeave={() => {
                    setVisile(true)
                }}>
                    <button className="p-4 lg:hidden" >

                        {/* <img alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-300" src="https://source.unsplash.com/40x40/?portrait?1" /> */}
                        <Avatar style={{ color: 'black', backgroundColor: '#fff' }} className='uppercase'>{name.slice(0, 2)}</Avatar>

                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg> */}
                    </button>

                    <div className="absolute top-10 right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 " style={{ visibility: `${visible ? 'hidden' : ''}` }} >
                        <div className="flex  items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => history.push('/login')} >{t('signin')}</div>
                        <div className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => history.push('/register')}>{t('signup')}</div>
                        <div className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => {

                            localStorage.clear()
                            history.push('/')
                            // window.location.reload()
                        }}>{t('signout')}</div>

                        <div className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => history.push('/profile')}>{t('profile')}</div>

                    </div>
                </div>
            </div>
        </header >
    )
}

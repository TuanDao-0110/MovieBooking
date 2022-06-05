import React, { Suspense, useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import { Avatar, Layout, Menu, Select } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
import { ACCOUNT } from '../../utilities/Setting/config';
import { history } from '../../App';
import { useTranslation } from 'react-i18next';

import _ from 'lodash'
import { Option } from 'antd/lib/mentions';
import { ADMIN } from '../../redux/type/utility'
const { Header, Sider, Content } = Layout;

export default function AdminTemplate(props) {
    const { t, i18n, ready } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const [visible, setVisile] = useState(true)
    let account = '';
    let name = '';
    let newemail = '';
    let userType = ''
    if (!_.isEmpty(localStorage.getItem(ACCOUNT))) {
        let { taiKhoan, hoTen, email, maLoaiNguoiDung } = JSON.parse(localStorage.getItem(ACCOUNT))
        account = taiKhoan
        name = hoTen
        newemail = email
        userType = maLoaiNguoiDung
    }
    const { Component, ...restRoute } = props // props = path, exact vs Component
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        < >
            <Route {...restRoute} render={(propsRoute) => { // propsRoute = props.location, props.history,props.match ....  (propsRoute property is return from Route)
                return <div className=''>
                    <Layout style={{ height: '100%' }} className='h-screen'>
                        <Sider trigger={null} collapsible collapsed={collapsed}>
                            <div className="logo" />

                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}   >
                                <SubMenu key='1' title='User'>

                                    <Menu.Item key='2' icon={<UserOutlined></UserOutlined>}> <NavLink to={'/admin/users'}>User List</NavLink></Menu.Item>
                                    <Menu.Item key='3' icon={<UserOutlined></UserOutlined>}> <NavLink to={'/admin/addnewuser'}>Add New User</NavLink></Menu.Item>

                                </SubMenu>
                                <SubMenu key='4' icon={<></>} title="Films">
                                    <Menu.Item key='5' icon={<VideoCameraOutlined></VideoCameraOutlined>}>
                                        <NavLink to={'/admin/film'}>Film</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='6' icon={<VideoCameraOutlined></VideoCameraOutlined>}>
                                        <NavLink to={'/admin/film/addnew'}>AddNew</NavLink>
                                    </Menu.Item>
                                </SubMenu>

                                {/* <Menu.Item key='7' icon={<UserOutlined></UserOutlined>}> <NavLink to={'/admin/showtimes'}>ShowTime</NavLink></Menu.Item> */}

                            </Menu>

                        </Sider>
                        <Layout className="">
                            <Header className="" style={{ padding: 0, backgroundColor: '' }}>
                                <div className='w-full grid grid-cols-12'>
                                    <div className='col-span-2 col-start-1'>
                                        <button className='text-green-400' onClick={() => {
                                            setCollapsed(!collapsed)
                                        }}> {!collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</button>

                                    </div>
                                    <div className='col-span-2 col-start-10 text-right text-green-400'>
                                        <div className='relative  ' onMouseOver={() => {
                                            setVisile(false)
                                        }} onMouseLeave={() => {
                                            setVisile(true)
                                        }}>
                                            Hello !     <button className="" >

                                                {/* <img alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-300" src="https://source.unsplash.com/40x40/?portrait?1" /> */}
                                                <Avatar style={{ color: 'black', backgroundColor: '#fff' }} className='uppercase'>{name.slice(0, 2)}</Avatar>

                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg> */}
                                            </button>

                                            <div className="absolute top-10 right-0 z-20 w-56 py-2 mt-4 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 " style={{ visibility: `${visible ? 'hidden' : ''}` }} >
                                                <div className="flex  items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer uppercase" onClick={() => history.push('/login')} >{t('signin')}</div>
                                                <div className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer uppercase" onClick={() => history.push('/')}>{t('Home Menu')}</div>
                                                <div className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer uppercase" onClick={() => {

                                                    localStorage.clear()
                                                    history.push('/')
                                                    window.location.reload()
                                                }}>{t('signout')}</div>

                                                <div className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white uppercase cursor-pointer" onClick={() => history.push('/profile')}>{t('profile')}</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </Header>
                            <Content
                                className=""
                                style={{
                                    margin: '24px 16px',
                                    padding: 24,
                                    minHeight: 280,
                                }}
                            >
                                <Component {...propsRoute}></Component>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            }}></Route>

        </>




    )
}

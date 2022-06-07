import React, { useEffect, useRef, useState } from 'react'
import { Tabs } from 'antd';
import { BookingConfirm } from '../Checkout/CheckOut';
import ModalEditUser from '../../Components/Modal/ModalEditUser';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { editUserAction } from '../../redux/action/UserManagerAction';
import { ACCOUNT } from '../../utilities/Setting/config';
import _ from 'lodash'
import { CLOSE_LOADING, OPEN_LOADING } from '../../redux/type/MovieManagerType';
const { TabPane } = Tabs;

export default function Profile() {
    const onChange = (key) => {
        // console.log(key);
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: OPEN_LOADING
        })

    }, [])
    function YourFile() {
        // 1. dataSubmit  User to Server  vs dataUser taken from localStore vs use Destructor method to clone all data from localStore
        let dataUser = useRef()
        let { userProfile } = useSelector(state => state.UserReducer)
        console.log('user', userProfile)
        let dataSubmit = useRef({
            "account": "",
            "password": "",
            "email": "",
            "phone": "",
            "name": "",
            'type': '',
        })
        !_.isEmpty(userProfile) ? dataUser.current = userProfile : dataUser.current = {
            "account": "",
            "password": "",
            "email": "",
            "phone": "",
            "name": "",
            'type': '',
        }
        // 2. Function for Modal Confirm
        const [isModalVisible, setIsModalVisible] = useState(false);
        const showModal = () => {
            setIsModalVisible(true);
        };
        const handleOk = () => {
            setIsModalVisible(false);
            // addNewUserAction(dataUser.current, dispatch).then()
            editUserAction(dataSubmit.current, dispatch).then()
        };

        const handleCancel = () => {
            setIsModalVisible(false);
        };
        const dispatch = useDispatch()
        // 3. Formik Function
        const formik = useFormik({
            initialValues: {
                "account": userProfile.taiKhoan,
                "password": userProfile.matKhau,
                "email": userProfile.email,
                "phone": userProfile.soDT,
                "name": userProfile.hoTen,
                'type': userProfile.loaiNguoiDung?.slice(0, 1) === "Q" ? "QuanTri" : "KhachHang",
            },
            onSubmit: values => {
                const data = {
                    taiKhoan: values.account,
                    matKhau: values.password,
                    email: values.email,
                    soDt: values.phone,
                    hoTen: values.name,
                    maLoaiNguoiDung: values.type,
                    maNhom: 'GP01',
                }
                dataSubmit.current = data
                showModal()
            },
        });
        return (
            <div className='text-black'>
                <ModalEditUser isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} dataUser={dataSubmit.current}></ModalEditUser>
                {/* 4. Render Input Component */}
                <div className="flex-1">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-center text-red-700 ">Edit Your Profile : {dataUser.current.taiKhoan}</h2>
                    </div>
                    <div className="mt-8">
                        <form onSubmit={(e) => {
                            // e.preventDefault()
                            formik.handleSubmit(e)
                        }} >
                            <div>
                                <label htmlFor="text" className="text-sm text-red-600 ">Account</label>
                                <input disabled type="text" name="account" id="text" placeholder="Your Account" className="block w-full px-4 py-2 mt-2 bg-gray-400 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md " onChange={formik.handleChange}
                                    value={formik.values.account} />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="email" className="text-sm text-red-600">Email Addres</label>
                                <input required type="email" name="email" id="email" placeholder="Your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onChange={formik.handleChange}
                                    value={formik.values.email} />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="password" className="text-sm text-red-600">Password</label>
                                <input required type="password" name="password" id="password" placeholder="input password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onChange={formik.handleChange}
                                    value={formik.values.password} />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="" className="text-sm text-red-600">Name</label>
                                <input required type="" name="name" id="" placeholder="your name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onChange={formik.handleChange}
                                    value={formik.values.name} />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="tel" className="text-sm text-red-600">Phone Number</label>
                                <input type="tel" name="phone" id="phone" placeholder="Your Phone" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onChange={formik.handleChange}
                                    value={formik.values.phone} />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="text" className="text-sm text-red-600">Customer Type</label>
                                {/* <input type="tel" name="phone" id="phone" placeholder="Your Phone" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onChange={formik.handleChange}

                value={formik.values.phone} /> */}
                                <select required defaultValue={formik.values.type} id="" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onClick={(e) => {
                                    console.log(e.target.value)
                                    formik.setFieldValue('type', e.target.value)
                                }}>
                                    {/* <option selected>Choose Customer Type</option> */}
                                    <option value="KhachHang">Customer</option>
                                    <option value="QuanTri">Admin</option>

                                </select>
                            </div>
                            <div className="mt-6">
                                <button type="" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Edit My Profile
                                </button>
                            </div>
                        </form>
                    </div>

                </div></div>
        )
    }
    return (


        <div className='container m-auto py-28 '>


            <Tabs style={{ color: 'rgb(255 255 255)' }} defaultActiveKey="1" onChange={onChange}>
                <TabPane style={{ color: "rgb(41 37 36)" }} tab="Your Booking Details" key="1">
                    <div className=''>
                        <BookingConfirm></BookingConfirm>
                    </div>
                </TabPane>
                <TabPane tab="Your Profile" key="2">
                    <YourFile></YourFile>
                </TabPane>

            </Tabs>


        </div>



    )
}

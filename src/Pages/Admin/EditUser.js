import { useFormik } from 'formik';
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import ModalEditUser from '../../Components/Modal/ModalEditUser'
import { addNewUserAction, editUserAction } from '../../redux/action/UserManagerAction';
import _, { join } from 'lodash'
import { EDIT_USER_TEMP } from '../../redux/type/utility';
export default function EditUser() {
    // 1. dataSubmit  User to Server  vs dataUser taken from localStore vs use Destructor to clone all data from localStore
    let dataUser = useRef()
    let dataSubmit = useRef({
        "account": "",
        "password": "",
        "email": "",
        "phone": "",
        "name": "",
        'type': '',
    })
!_.isEmpty(localStorage.getItem(EDIT_USER_TEMP)) ? dataUser.current = JSON.parse(localStorage.getItem((EDIT_USER_TEMP))) : dataUser.current = {
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
            "account": dataUser.current.taiKhoan,
            "password": dataUser.current.matKhau,
            "email": dataUser.current.email,
            "phone": dataUser.current.soDt,
            "name": dataUser.current.hoTen,
            'type': dataUser.current.maLoaiNguoiDung,
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
            console.log(dataSubmit.current)
            // dataUser.current = data
            showModal()


            // dispatch(logUpUserAction(dataUser))
        },
    });
    return (
        <div className='text-black'>
            <ModalEditUser isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} dataUser={dataSubmit.current}></ModalEditUser>
            {/* 4. Render Input Component */}
            <div className="flex-1">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-center text-gray-700 ">edit user : {dataUser.current.taiKhoan}</h2>
                </div>
                <div className="mt-8">
                    <form onSubmit={(e) => {
                        // e.preventDefault()
                        formik.handleSubmit(e)
                    }} >
                        <div>
                            <label htmlFor="text" className="text-sm text-gray-600 ">Account</label>
                            <input disabled type="text" name="account" id="text" placeholder="Your Account" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md " onChange={formik.handleChange}
                                value={formik.values.account} />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="email" className="text-sm text-gray-600">Email Addres</label>
                            <input required type="email" name="email" id="email" placeholder="Your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onChange={formik.handleChange}
                                value={formik.values.email} />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                            <input required type="password" name="password" id="password" placeholder="input password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onChange={formik.handleChange}
                                value={formik.values.password} />
                        </div>

                        <div className="mt-6">
                            <label htmlFor="" className="text-sm text-gray-600">Name</label>
                            <input required type="" name="name" id="" placeholder="your name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onChange={formik.handleChange}
                                value={formik.values.name} />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="tel" className="text-sm text-gray-600">Phone Number</label>
                            <input required type="tel" name="phone" id="phone" placeholder="Your Phone" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" onChange={formik.handleChange}
                                value={formik.values.phone} />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="text" className="text-sm text-gray-600">Customer Type</label>
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
                                Edit User
                            </button>
                        </div>
                    </form>
                </div>

            </div></div>
    )
}

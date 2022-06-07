import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import ModalEditUser from '../../Components/Modal/ModalEditUser'
import { addNewUserAction } from '../../redux/action/UserManagerAction';
import { CLOSE_LOADING, OPEN_LOADING } from '../../redux/type/MovieManagerType';
export default function AddNewUser() {
  // 1. data User to Server
  let dataUser = useRef({
    "account": "",
    "password": "",
    "email": "",
    "phone": "",
    "name": "",
    'type': 'QuanTri',
  })
  // 2. Function for Modal Confirm
  const [isModalVisible, setIsModalVisible] = useState(false);


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log(dataUser.current)
    addNewUserAction(dataUser.current, dispatch).then()

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const dispatch = useDispatch()
  // 3. Formik Function
  const formik = useFormik({
    initialValues: {
      "account": "",
      "password": "",
      "email": "",
      "phone": "",
      "name": "",
      'type': 'QuanTri',
    },
    onSubmit: values => {
      const data = {
        taiKhoan: values.email,
        matKhau: values.password,
        email: values.email,
        soDt: values.phone,
        hoTen: values.name,
        maLoaiNguoiDung: values.type,
        maNhom: 'GP01',
      }
      dataUser.current = data
      console.log(dataUser.current)
      // dataUser.current = data
      showModal()


      // dispatch(logUpUserAction(dataUser))
    },
  });
  useEffect(() => {
    dispatch({
      type: OPEN_LOADING
    })
    setTimeout(() => {
      dispatch({
        type: CLOSE_LOADING
      })
    }, 2000);
  }, [])
  return (
    <div className='text-black'>
      <ModalEditUser isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} dataUser={dataUser.current}></ModalEditUser>
      {/* 4. Render Input Component */}
      <div className="flex-1">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center text-gray-700 ">Add New User</h2>
        </div>
        <div className="mt-8">
          <form onSubmit={(e) => {
            // e.preventDefault()
            formik.handleSubmit(e)
          }} >
            <div>
              <label htmlFor="text" className="text-sm text-gray-600 ">Account</label>
              <input required type="text" name="account" id="text" placeholder="Your Account" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md " onChange={formik.handleChange}
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
                Add NEW USER
              </button>
            </div>
          </form>
        </div>

      </div></div>
  )
}

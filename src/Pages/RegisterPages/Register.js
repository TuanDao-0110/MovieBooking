import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logUpUserAction } from '../../redux/action/UserManagerAction';

export default function Register(props) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      "account": "",
      "password": "",
      "email": "",
      "phone": "",
      "name": ""
    },
    onSubmit: values => {
      const dataUser = {
        taiKhoan: values.email,
        matKhau: values.password,
        email: values.email,
        soDt: values.phone,
        hoTen: values.name,
        maNhom: 'GP01',
      }

      console.log(dataUser)
      dispatch(logUpUserAction(dataUser))
    },
  });
  return (
    <div className='text-white'>
      <div className="flex-1">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Movie</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-300">Sign up to access your account</p>
        </div>
        <div className="mt-8">
          <form onSubmit={(e) => {
            e.preventDefault()
            formik.handleSubmit(e)
          }} >
            <div>
              <label htmlFor="text" className="text-sm text-gray-600 dark:text-gray-200">Account</label>
              <input required type="text" name="account" id="text" placeholder="Your Account" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={formik.handleChange}
                value={formik.values.account} />
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-200">Email Addres</label>
              <input required type="email" name="email" id="email" placeholder="Your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={formik.handleChange}
                value={formik.values.email} />
            </div>
            <div className="mt-6">
              <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
              <input required type="password" name="password" id="password" placeholder="input password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={formik.handleChange}
                value={formik.values.password} />
            </div>

            <div className="mt-6">
              <label htmlFor="" className="text-sm text-gray-600 dark:text-gray-200">Name</label>
              <input type="" name="name" id="" placeholder="your name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={formik.handleChange}
                value={formik.values.name} />
            </div>
            <div className="mt-6">
              <label htmlFor="tel" className="text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
              <input type="tel" name="phone" id="phone" placeholder="Your Phone" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={formik.handleChange}
                value={formik.values.phone} />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign up
              </button>
            </div>
          </form>
        </div>

      </div></div>
  )
}

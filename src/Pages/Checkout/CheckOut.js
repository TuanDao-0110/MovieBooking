import React, { Fragment, useEffect, useState } from 'react'
import { ACCOUNT } from '../../utilities/Setting/config'
import style from './CheckOut.module.css'
import { useSelector, useDispatch, } from 'react-redux'
import { bookingAction, postBookingTicketAction, removeBookingAction, takingBookingTicketAction } from '../../redux/action/BookingTicketAction'
import { ACTIVE_CHANGE, BOOKING_SEAT_REDUCER, BOOKING_SEAT_REMOVE_REDUCER, OPEN_MODAL_BOOKING_DETAILS, ORDER_BOOKING_FROM_SERVER, REMOVE_ALL_TEMP_BOOKING, } from '../../redux/type/MovieManagerType'
import _ from 'lodash'
import moment from 'moment'
import { Button, Tabs } from 'antd';
import { userManagerBookingInfo } from '../../redux/action/UserManagerAction'
import { connection } from '../../index'

const { TabPane } = Tabs;
let newAccount = '';
let newEmail = '';
let newPhone = '';
let newName = ''
export function BookingConfirm() {
  const dispatch = useDispatch()
  useEffect(() => {
    
         dispatch(userManagerBookingInfo())
 

  }, [])
  const { bookingInforUser } = useSelector((state) => state.UserReducer)
  return <>
    <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center ">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0" >

        {bookingInforUser?.map((bookingInfor, index) => {
          return <div key={index} className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">{bookingInfor.tenPhim}</h3>
            <div className="relative">
              <img className="w-20 m-auto h-36 rounded-xl" src={bookingInfor.hinhAnh} alt="Colors" onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://api.lorem.space/image/movie?w=150&h=220";
              }} />
              <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Booked</p>
            </div>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p className='text-black'>{bookingInfor.thoiLuongPhim} Minutes</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <p className='text-black'> <span className='text-red-500'> {bookingInfor.danhSachGhe.length}</span > Tickets Booked</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p className='text-black'>{moment(bookingInfor.ngayDat).format("DD-MM-YY , HH:MM A")}</p>
              </div>

              <div className="flex space-x-1 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                </span>
                <p className='text-black'>{bookingInfor.danhSachGhe?.[0].tenHeThongRap}</p>
              </div>

              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg" onClick={() => {
                dispatch({
                  type: OPEN_MODAL_BOOKING_DETAILS,
                  modalBookingSeat: bookingInfor
                })
              }}>More Details</button>
            </div>
          </div>

        })}
      </div>
    </div>

  </>
}

function CheckOut(props) {

  useEffect(() => {
    const { taiKhoan, hoTen, email, soDT } = JSON.parse(localStorage.getItem(ACCOUNT))
    newAccount = taiKhoan
    newName = hoTen
    newEmail = email
    newPhone = soDT
    // load list seat on booking from server ; this will receive from back-end in case some thing change
    connection.on('loadDanhSachGheDaDat', (listSeatArray) => {
      // listSeatArray = listSeatArray.filter(item => item.taiKhoan !== newAccount)
      // let listUnvailableSeat = listSeatArray?.reduce((result, listBooked, index) => {
      //   let arrSeat = JSON.parse(listBooked.danhSachGhe)
      //   return [...result, ...arrSeat]

      // }, [])
      // console.log('new array', listSeatArray)
      // dispatch({
      //   type: ORDER_BOOKING_FROM_SERVER,
      //   listUnvailableSeat
      // })

    })
  }, [])
  const bookingID = props.match.params.id

  const { detailsTicketBooking, detailsSeatBooking, presentBookingSeatArr, listUnvailableSeat } = useSelector(state => state.TicketBookingReducer)
  const dispatch = useDispatch()
  const renderSeat = () => {
    return detailsSeatBooking.map((seat, index) => {
      let indexPresentBookingSeat = presentBookingSeatArr?.findIndex((seatBooking) => seatBooking.maGhe === seat.maGhe)
      let indexUnvailableSeat = listUnvailableSeat?.findIndex((seatUnvailable => seatUnvailable.maGhe === seat.maGhe))
      let bgColor = 'bg-red-300'
      if (seat.loaiGhe.toUpperCase() !== "VIP") {
        bgColor = 'bg-green-300'
      } if (indexPresentBookingSeat !== -1) {
        bgColor = 'bg-black'
      } if (seat.taiKhoanNguoiDat === newAccount) {
        bgColor = 'bg-blue-300'
      } if (indexUnvailableSeat !== -1) {
        bgColor = 'bg-yellow-300'
      }
      return <div key={index} style={{ flexBasis: '', width: '6%', margin: '0.125%', }}>
        <button
          disabled={seat.daDat || indexPresentBookingSeat !== -1 || indexUnvailableSeat !== -1 ? true : false}
          className={`h-7 w-7  text-white rounded-lg ${bgColor} hover:bg-blue-100 focus:outline-none focus:ring`}
          onClick={() => {
            dispatch(bookingAction(seat, bookingID))
          }}
        >
          {seat.daDat || indexPresentBookingSeat !== -1 ? 'x' : index + 1}

        </button>
        {/* {(index + 1) % 16 ===0 ? <br></br> : ''} */}
      </div>


    })
  }
  const renderSeatBooking = () => {
    return _.sortBy(presentBookingSeatArr, ['stt'])?.map((seat, index) => {
      return <div key={index} className=' col-span-2 grid grid-cols-5 content-center cursor-pointer hover:shadow-md hover:bg-slate-100 duration-300 pt-2 '>
        <div className=' text-red-500 col-span-1 text-left'>{seat.stt}</div>
        <div className=' text-green-500 col-span-3 text-right'>{seat.giaVe?.toLocaleString()} Eur</div>
        <div className='col-span-1 text-right'>
          <button className='text-rose-500 hover:text-red-100' onClick={() => {
            dispatch(removeBookingAction(seat, bookingID))
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    })
  }
  useEffect(() => {
    dispatch(takingBookingTicketAction(bookingID))
  }, [])
  return (
    <div className='container mx-auto '>
      <div className='grid grid-cols-12'>
        <div className='col-span-1'>

          <button className='hover:bg-red-300' onClick={() => {
            dispatch({
              type: REMOVE_ALL_TEMP_BOOKING
            })
            props.history.goBack()
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>
        <div className='col-span-1 col-start-9'>
          <button onClick={() => {
            dispatch({
              type: REMOVE_ALL_TEMP_BOOKING
            })
            props.history.push('/')
          }}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg></button>
        </div>
      </div>

      <div className='grid grid-cols-12'>
        <div className='col-span-9'>
          <div className={`${style.screen} w-full bg-orange-500 text-center py-2 text-lg text-blue-700`} >Screen</div>

          <div className='flex flex-wrap mt-28 '>

            {renderSeat()}
          </div>
        </div>
        <div className='col-span-3 '>
          <h3 className='text-center text-green-400 text-xl'> {presentBookingSeatArr?.reduce((sum, seat, index) => sum += seat.giaVe, 0).toLocaleString()} Eur</h3>
          <hr></hr>
          <h3 className='text-xl text-red-100'>{detailsTicketBooking.tenPhim} </h3>
          <p>location: {detailsTicketBooking.diaChi}</p>
          <p> Date : {detailsTicketBooking.ngayChieu}</p>
          <p>Time :{detailsTicketBooking.gioChieu}</p>
          <hr></hr>
          <div className='grid grid-cols-2 my-5'>
            <div className=' grid grid-cols-3 col-span-2 '>
              <div className='text-left text-red-500'>Seat</div>
              <div className='text-center text-green-500'>Price</div>
            </div>
            {renderSeatBooking()}

            <div className='text-rose-200 col-span-1'> Total : </div>
            <div className='text-rose-200 col-span-1 text-right'> {presentBookingSeatArr?.reduce((sum, seat, index) => sum += seat.giaVe, 0).toLocaleString()} eur </div>

          </div>
          <hr></hr>
          <div className='my-5 '>
            <i className='text-rose-500'>Email</i>
            <br>
            </br>
            {newEmail}
          </div>
          <hr></hr>
          <div className='my-5'>
            <i className='text-rose-500'>Phone</i>
            <br>
            </br>
            {newPhone}
          </div>
          <hr></hr>
          <div className='my-5'>
            <i className='text-rose-500'>Name</i>
            <br>
            </br>
            {newName}
          </div>
          <div className='flex p-2 w-full justify-center space-x-0 '>
            <button
              className='  min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-none hover:bg-blue-500 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out'

              onClick={() => {
                dispatch(postBookingTicketAction(
                  {
                    "maLichChieu": bookingID,
                    "danhSachVe": presentBookingSeatArr
                  }
                ))
              }}
            >
              Book
            </button>
          </div>
        </div>
      </div>
      <div className=' grid grid-cols-12 mt-10'>
        <div className='col-span-1 bg-green-300 w-7 h-7 rounded-md'>
        </div>
        <div className='col-span-2 text-left  font-bold text-green-300'>
          : Available
        </div>
        <div className='col-span-1 bg-red-300 w-7 h-7 rounded-md'>
        </div>
        <div className='col-span-2 text-left  font-bold text-red-300'>
          : Available - VIP
        </div>
        <div className='col-span-1 bg-blue-300 w-7 h-7 rounded-md'>
        </div>
        <div className='col-span-2 text-left  font-bold text-blue-300'>
          : Your Booking Confirmed
        </div>
        <div className='col-span-1 bg-black w-7 h-7 rounded-md'>
        </div>
        <div className='col-span-2 text-left  font-bold'>
          : Your Current UnConfirmed
        </div>
        <div className='col-span-1 bg-yellow-300 w-7 h-7 rounded-md'>
        </div>
        <div className='col-span-2 text-left  font-bold'>
          : Other Customer Are Booking
        </div>
      </div>


    </div>
  )
}



// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  const operaion =
    <>
      <span className='text-red-500 text-2xl'>
        Hello ! <Button onClick={() => {
          props.history.push('/profile')
        }}>{newAccount} - Click to go Your Account's Profile</Button>
        <Button className='ml-2' onClick={() => {
          props.history.push('/')
        }}> Back Home Page</Button>
      </span>
    </>
  const dispatch = useDispatch()
  const onChange = (e) => {
    dispatch({
      type: ACTIVE_CHANGE,
      number: e
    })
  };
  const { tabActive } = useSelector(state => state.TicketBookingReducer)
  return <div className=''>

    <Tabs defaultActiveKey={1} activeKey={tabActive} style={{ color: 'white' }} onChange={(e) => onChange(e)} tabBarExtraContent={operaion}>
      <TabPane tab=" 1. Choose Seat & PayMent" key="1" >
        <CheckOut {...props}></CheckOut>
      </TabPane>
      <TabPane tab="2. Booking Confirmed" key="2" >
        <BookingConfirm {...props}></BookingConfirm>
      </TabPane>

    </Tabs>
  </div>
}
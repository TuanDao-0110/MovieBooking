import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL_BOOKING_DETAILS, } from '../../redux/type/MovieManagerType';


export default function BookingConfirmedDetails() {

    const dispatch = useDispatch()



    const handleOk = () => {
        dispatch({
            type: CLOSE_MODAL_BOOKING_DETAILS
        })
    };
    const { modalToogle, modalBookingSeat } = useSelector(state => state.UserReducer)
    return (
        <>

            <Modal title={`Your Booking Movie :${modalBookingSeat?.tenPhim}`} visible={modalToogle} onCancel={handleOk} onOk={handleOk} >
                <div className='grid grid-cols-12'>
                    <div className='col-span-2 col-start-2 uppercase text-red-300'>seat :</div>
                    <div className='col-span-8'>{modalBookingSeat.danhSachGhe?.map((seat, index) => {
                        return <span key={index} className='text-green-300 mx-1'>
                            {seat.tenGhe}
                        </span>

                    })}</div>
                    <div className='col-span-2 col-start-2 uppercase mt-3 text-red-300'> Location :</div>
                    <div className='col-span-8 text-green-300 mt-3'>{modalBookingSeat.danhSachGhe?.[1].tenHeThongRap} </div>
                    <div className='col-span-2 col-start-2 uppercase mt-3 text-red-300'> State :</div>
                    <div className='col-span-8 text-green-300 mt-3'>{modalBookingSeat.danhSachGhe?.[1].tenCumRap.slice(4)} </div>
                    <div className='col-span-2 col-start-8 uppercase mt-3 text-blue-300'>Total Paid:</div>
                    <div className='col-span-3 text-black text-right mt-3'>{(modalBookingSeat.danhSachGhe?.length * modalBookingSeat.giaVe).toLocaleString()}-eur </div>


                </div>
            </Modal>
        </>
    )
}

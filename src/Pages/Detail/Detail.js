/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import HalfRating from '../../Components/StartRating'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import moment from 'moment';


import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { CALENDER, INFOR, RATING, TRAILER } from '../../redux/type/utility';
import { Hidden } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { DescriptionMovie } from '../HomePages/HomeMenu/HomeDescription';
const { TabPane } = Tabs;

export default function Detail(props) {
    const { tenPhim, hinhAnh, moTa, danhGia, ngayKhoiChieu, heThongRapChieu, trailer } = useSelector(state => state.MovieListReducer.filmDetails)
    let grade = danhGia;


    useEffect(() => {

    }, [])
    return (
        <div className='min-h-screen min-w-full ' style={{ backgroundImage: `url(${hinhAnh})`, backgroundPosition: 'cotain ', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
            <CustomCard
                style={{ paddingTop: 150 }}
                className="min-h-screen "
                effectColor="#bdbdbd" // required
                color="#fff" // default color is white
                blur={20} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
                backgroundImage={hinhAnh}
            >
                <div className='grid grid-cols-12'>
                    <div className='col-span-6 col-start-3'>
                        <div className='grid grid-cols-2'>
                            <div>
                                <img src={hinhAnh} alt='' className='w-full h-full'></img>
                            </div>
                            <div className='grid place-content-center text-center px-5'>
                                <h1 className='text-xl text-green-700 '> Lorem</h1>
                                <p className=''> {DescriptionMovie.length > 50 ? DescriptionMovie.slice(0, 50) + '...' : ''}</p>
                            </div>
                        </div>
                        <p></p>
                    </div>
                    <div className='col-span-2 '>
                        <div className='flex flex-col items-center '>
                            <div className='mb-5 '>
                                <CircularProgressbar className='h-24' value={grade * 10} text={`${grade}/10`} styles={buildStyles({
                                    pathColor: "#6abf69",
                                    trailColor: "",
                                    strokeLinecap: ''
                                })} />
                            </div>
                            <div>
                                <HalfRating rating={grade}></HalfRating>
                            </div>
                            <div className='text-center'>
                                <p>
                                    319 ratings
                                </p>
                                <p className='text-green-700'>
                                    Releasing Date: {moment(ngayKhoiChieu).format("MMM Do YY")}

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 mt-5'>
                    <div className='col-span-8 col-start-3'>
                        <Tabs defaultActiveKey="1" centered style={{ color: 'white' }}>
                            <TabPane tab={CALENDER} key="1" >
                                <Tabs tabPosition={'left'} className='' style={{ color: '' }} >
                                    {heThongRapChieu.map((theater, index) => {
                                        return <TabPane tab={<div className='flex flex-col items-center text-center w-20 mr-3'><img src={theater.logo} alt='' className='rounded-full w-10 mb-3' />{theater.tenHeThongRap}</div>} key={index}>
                                            <div className=''>
                                                {theater.cumRapChieu.map((theaterState, index) => {
                                                    return <div key={index}>
                                                        <div className='flex'>
                                                            <img src={theaterState.hinhAnh} alt='' className='w-10 h-10' />
                                                            <h1 className=' capitalize ml-5  text-lime-400/50'>
                                                                Address :     {theaterState.tenCumRap}
                                                            </h1>
                                                        </div>
                                                        <div className='grid lg:grid-cols-4 grid-cols-2 gap-1 text-center mt-5'>
                                                            {theaterState.lichChieuPhim.map((time, index) => {
                                                                return <div key={index} className='text-white flex flex-row '>
                                                                    <p className='font-bold '>State : <span className='text-sky-500 '>{time.tenRap.slice(4)}</span>-*-</p>
                                                                    <p className='font-bold'>Time : <NavLink to={`/checkout/${time.maLichChieu}`}> <span className='text-red-500 hover:text-rose-50 duration-75 '>{moment(time.ngayChieuGioChieu).format('LT')}</span></NavLink></p>
                                                                </div>
                                                            })}
                                                        </div>
                                                    </div>
                                                })}
                                            </div>
                                        </TabPane>
                                    })}


                                </Tabs>
                            </TabPane>
                            <TabPane tab={INFOR} key="2">
                                {DescriptionMovie}
                            </TabPane>
                            <TabPane tab={RATING} key="3">
                                <HalfRating rating={grade}></HalfRating>
                            </TabPane>
                            <TabPane tab={TRAILER} key="4">
                                <div style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    width: '100%',
                                    height: '300px'
                                }}>
                                    <iframe
                                        style={{
                                            position: 'absolute',

                                        }}
                                        width='100%'
                                        height='100%'
                                        src={trailer}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow=" clipboard-write; encrypted-media; gyroscope; picture-in-picture," />
                                </div>
                            </TabPane>
                        </Tabs>

                    </div>
                </div>
            </CustomCard>





        </div>
    )
}

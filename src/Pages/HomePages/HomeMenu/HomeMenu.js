import React from 'react'
import { Tabs, } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
const { TabPane } = Tabs;
export default function HomeMenu(props) {
    const { theatherList } = props
    const renderTheather = () => {
        return theatherList?.map((item, index) => {
            return <TabPane key={index} tab={<img src={item.logo} alt='' className='rounded-full w-10 h-10' />} >
                <Tabs tabPosition={'left'}>

                    {item.lstCumRap?.map((rap, index) => {

                        return <TabPane key={`${rap}${index}`} tab={
                            <div className='flex flex-row w-fit items-center'>

                                <img src={item.logo} alt='' className='rounded-full w-10 h-10 ' />

                                {rap.tenCumRap}


                            </div>
                        }
                            className=''>


                            {rap.danhSachPhim?.slice(0, 2).map((Film, index) => {
                                return <div className='flex  border-b-2 border-sky-200 ' key={`film${index}`}>
                                    <div className='basis-24  flex items-center'>
                                        <img src={Film.hinhAnh} alt='' onError={(e) => { e.target.onerror = null; e.target.src = 'https://placeimg.com/200/300/animals' }} className='w-full' />
                                    </div>

                                    <div className='w-full lg:px-5 sm: px-0'>
                                        <h1 className='text-green-800 text-center uppercase font-bold text-xl' >
                                            {Film.tenPhim}
                                        </h1>
                                        <p>{rap.diaChi}</p>
                                        <div className='grid grid-cols-4 gap-1'>

                                            {Film.lstLichChieuTheoPhim?.slice(0, 10).map((time, index) => {
                                                return <NavLink key={index} to='/' className='text-center text-green-700 hover:text-purple-600 text-sm' >
                                                    {moment(time.ngayChieuGioChieu).format('hh:mm A')}
                                                </NavLink>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            })}
                        </TabPane>
                    })}
                </Tabs>

            </TabPane>
        })
    }
    return (
        <div className='my-20r' >

            <Tabs tabPosition={'left'}>
                {renderTheather()}

            </Tabs>
        </div>
    )
}

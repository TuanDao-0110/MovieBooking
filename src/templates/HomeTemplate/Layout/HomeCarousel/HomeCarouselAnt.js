import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector, } from 'react-redux';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { getCarouselAction } from '../../../../redux/action/CarouselAction';
import './HomeCarousel.css'
import { width } from 'tailwindcss/defaultTheme';
const contentStyle = {
    // height: '100%',
    color: '#fff',
    lineHeight: '360px',
    textAlign: 'center',

};
export default function HomeCarouselAnt() {
    const dispatch = useDispatch()
    const { listMovie } = useSelector(state => state.CarouselReducer)
    // useEffect will run after render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // 1. action = {type vs data} ==> reducer 
        // 2. (middleware )   : middleware receive  function (dispatch,....,....)
        dispatch(getCarouselAction())
    }
        , [])
    const renderListMovie = () => {
        return listMovie?.map((item, index) => {
            return <div className='' key={index} >
                <div className='opacity-75 ' style={{ ...contentStyle, backgroundImage: ` `, }} >
                    <img src={item.hinhAnh} className='w-full ' style={{ width: "window.innerWidth", }} alt='' />
                </div>
            </div>
        })
    }
    return (


        <Carousel effect='fade' className='w-full '  >
            {renderListMovie()}
        </Carousel>



    )
}

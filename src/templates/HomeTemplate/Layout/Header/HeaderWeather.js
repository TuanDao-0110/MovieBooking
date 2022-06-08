import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { WeatherIconSun, WeatherIconsCloud, WeatherIconSnow } from "../../../../Components/WeatherIcons/WeatherIcon";
import { weatherInforAction } from "../../../../redux/action/WeatherAction";
import _ from 'lodash'
import moment from 'moment';
import { getTimeProps } from 'antd/lib/date-picker/generatePicker';
export default function HeaderWeather() {
    const dispatch = useDispatch()
    const { weatherInfor } = useSelector(state => state.WeatherReducer)
    console.log('weatherInfor', weatherInfor?.main)
    let [date, setDate] = useState()
    useEffect(() => {
        dispatch(weatherInforAction('helsinki'))
        setDate(Date().slice(0, 21))
        setInterval(() => {
            setDate(Date().slice(0, 21))
        }, 600000);
    }, [])

    const renderWeather = () => {
        if (!_.isEmpty(weatherInfor)) {
            switch (weatherInfor?.weather?.[0]?.description) {
                case 'clear sky': {
                    return <div className='flex  items-center   '>
                        <WeatherIconSun></WeatherIconSun>



                    </div>
                }
                default: <WeatherIconsCloud></WeatherIconsCloud>
            }


        }
    }
    return (
        <div className='grid grid-cols-12'>

            <p className=' text-purple-200 col-start-7 col-span-4  shadow-cyan-400 shadow-sm-light text-center'>
                {date}
            </p>
            <p className='text-red-300 col-span-1 col-start-7'>{weatherInfor?.weather?.[0].main}</p>
            <p className='text-red-300 col-span-1'>Temp: {weatherInfor?.main?.temp}</p>

            <div className='col-span-2 col-start-10 '>
                {renderWeather()}
            </div>

        </div>
    )
}

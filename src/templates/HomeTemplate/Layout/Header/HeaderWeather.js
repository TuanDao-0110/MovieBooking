import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { WeatherIconSun, WeatherIconsCloud, WeatherIconSnow, WeatherIconCloudAndSun, WeatherRain } from "../../../../Components/WeatherIcons/WeatherIcon";
import { weatherInforAction } from "../../../../redux/action/WeatherAction";
import _ from 'lodash'
import moment from 'moment';
import { getTimeProps } from 'antd/lib/date-picker/generatePicker';




function DateTime() {
    let [date, setDate] = useState(1)
    useEffect(() => {
        setInterval(() => {
            setDate(Date().slice(0, 24))
        }, 1000);
    })
    return (
        <>
            {date}
        </>
    )
}




// eslint-disable-next-line import/no-anonymous-default-export
export default function HeaderWeather() {
    const dispatch = useDispatch()
    const { weatherInfor } = useSelector(state => state.WeatherReducer)
    console.log('weatherInfor', weatherInfor)

    useEffect(() => {
        dispatch(weatherInforAction('helsinki'))
    }, [])

    const renderWeather = () => {
        setInterval(() => {
            dispatch(weatherInforAction('helsinki'))
        }, 60000)
        if (!_.isEmpty(weatherInfor)) {
            switch (weatherInfor?.weather?.[0]?.main) {
                case 'clear sky' || 'clear': {
                    return <div className='flex  items-center   '>
                        <WeatherIconSun></WeatherIconSun>
                    </div>
                }
                case 'Clouds': {
                    return <div className='flex  items-center   '>
                        <WeatherIconsCloud></WeatherIconsCloud>
                    </div>
                }
                case 'snow': {
                    return <div className='flex  items-center   '>
                        <WeatherIconSnow></WeatherIconSnow>
                    </div>
                }
                case 'cloud sun': {
                    return <div className='flex  items-center   '>
                        <WeatherIconCloudAndSun></WeatherIconCloudAndSun>
                    </div>
                }
                case 'rain': {
                    return <div className='flex  items-center   '>
                        <WeatherRain></WeatherRain>
                    </div>
                }
                default: <WeatherIconCloudAndSun></WeatherIconCloudAndSun>
            }
        } else {
            return <WeatherIconSun></WeatherIconSun>
        }
    }
    return (
        <div className='grid grid-cols-12'>
            <p className=' text-purple-200 col-start-7 col-span-4  shadow-cyan-400 shadow-sm-light text-center'>
                <DateTime></DateTime>
            </p>
            <p className='text-red-300 col-span-1 col-start-7'>Temp: {weatherInfor?.main?.temp.toFixed(1)}°C</p>
            <p className='text-red-300 col-span-1 text-right '>{weatherInfor?.weather?.[0].main}</p>
            <div className='col-span-1 col-start-9 mt-2'>
                {renderWeather()}
            </div>
        </div>
    )
}

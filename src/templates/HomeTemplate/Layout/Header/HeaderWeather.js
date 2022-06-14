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
    const [scrollY, setSrollY] = useState()
    const dispatch = useDispatch()
    const { weatherInfor } = useSelector(state => state.WeatherReducer)
    useEffect(() => {
        dispatch(weatherInforAction('helsinki'))
        setTimeout(() => {
            dispatch(weatherInforAction('helsinki'))
        }, 60000)
    }, [])

    const renderWeather = () => {

        if (!_.isEmpty(weatherInfor)) {

            return <img className='' alt='' src={`http://openweathermap.org/img/wn/${weatherInfor?.weather?.[0]?.icon}@2x.png`} >
            </img>
        } else {
            return <img alt='' className='absolute ' style={{top:'-25px'}} src={`http://openweathermap.org/img/wn/10d@2x.png`}>
            </img>
        }
    }
    return (
        <>
            {window.addEventListener('scroll', () => {
                setSrollY(window.scrollY)
            })}
            {scrollY > 100 ? <></> : <div className='grid grid-cols-12 place-items-stretch  '>
                <p className=' text-purple-200 col-start-8 col-span-4  shadow-cyan-400 shadow-sm-light text-center'>
                    <DateTime></DateTime>
                </p>
                <p className='text-red-300 col-span-1 col-start-8 flex items-stretch'>Temp°C {weatherInfor?.main?.temp.toFixed(1)}  </p>
                <p className='text-red-300 col-span-1 text-center '>{weatherInfor?.weather?.[0].main}</p>
                <div className='col-span-2  '>
                    <div className='relative'>
                    {renderWeather()}

                    </div>

                </div>
            </div>}

        </>


    )
}

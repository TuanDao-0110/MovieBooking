import React from 'react'
import styledWeather from './WeatherIcon.module.css'

export function WeatherIconSun() {
    return (
        <div className={`${styledWeather["weather-sun"]} `}>
            <div className={`${styledWeather["sun"]}`}>
                <div className={`${styledWeather["rays"]}`}></div>
                <div className={`${styledWeather["rays"]}`}></div>
                <div className={`${styledWeather["rays"]}`}></div>
                <div className={`${styledWeather["rays"]}`}></div>
            </div>
        </div>
    )
}


export function WeatherIconsCloud() {
    return <div className={styledWeather["weather-cloud"]}>
        <div className={styledWeather["cloud"]}></div>
        <div className={styledWeather["cloud"]}></div>
    </div>

}


export function WeatherIconSnow() {
    return <div className={styledWeather["weather-snow"]}>
        <div className={styledWeather["snow"]}>
            <div className={styledWeather["f"]} />
        </div>
    </div>
}


export function WeatherIconCloudAndSun() {
    return <div className={styledWeather["weather-cloudAndSun"]}>
        <div className={styledWeather["cloud"]} />
        <div className={styledWeather["sun"]}>
            <div className={styledWeather["rays"]} />
            <div className={styledWeather["rays"]} />
            <div className={styledWeather["rays"]} />
            <div className={styledWeather["rays"]} />
        </div>
    </div>
}


export function WeatherRain() {
    return <div className={styledWeather["weather-rain"]}>
        <div className={styledWeather["cloud"]} />
        <div className={styledWeather["rain"]} />
        <div className={styledWeather["rain"]} />
        <div className={styledWeather["rain"]} />
        <div className={styledWeather["rain"]} />
    </div>
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { tookMovieCalender } from '../../redux/action/TheatherManagerAction'
import styleFilm from './Film.module.css'
export default function Film(props) {
    const { tenPhim, moTa, hinhAnh, sapChieu, maPhim } = props
    const dispatch = useDispatch()
    return (

        <div className={`${styleFilm["flip-card-container"]} mt-1 px-1`}  >
            <div className={`${styleFilm['flip-card']}`}>

                <div className={`${styleFilm['card-front']}`}>
                    <figure>
                        <div className={`${styleFilm['img-bg']}`}></div>
                        <img src={hinhAnh} alt="" className='w-full' />
                        <figcaption className={`${styleFilm['captionFilm']}`}>{ }</figcaption>
                    </figure>


                </div>

                <div className={`${styleFilm['card-back']}`}>
                    <figure>
                        <div className={`${styleFilm['img-bg']}`}></div>
                        <img src={hinhAnh} alt="" className='w-full' />
                        <figcaption className={`${styleFilm['captionFilm']}`} >{moTa.length > 50 ? moTa.slice(0, 50) + '...' : moTa}</figcaption>
                    </figure>

                    <button className={`${styleFilm['buttonFilm']}`} onClick={() => {

                        dispatch(tookMovieCalender(maPhim))
                    }}><NavLink to={`/detail/${maPhim}`}>Book</NavLink></button>


                </div>

            </div>
        </div>

    )
}

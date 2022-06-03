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

        // <div className=" mx-1  bg-gray-800 bg-opacity-75 rounded-2xl  overflow-hidden text-center relative box-content ">
        //     <div style={{ backgroundImage: `url(${hinhAnh})`, backgroundPosition: ' 50% 50%', backgroundSize: 'cover' }} className='bg-no-repeat'>

        //         <img src={props.hinhAnh} alt='' className='w-full h-80 opacity-0'></img>
        //     </div>
        //     {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{tenPhim}</h2> */}
        //     <h1 className="title-font  text-lg font-medium text-gray-900 mb-3">{tenPhim.length > 10 ? tenPhim.slice(0, 10) : tenPhim}</h1>
        //     <div className='px-2'>

        //         <p className="leading-relaxed mb-3 text-sm">{moTa.length > 50 ? moTa.slice(0,50) +'...' : moTa}</p>
        //     </div>
        //     <a className="text-indigo-500 inline-flex items-center" >Booking Tickets
        //         <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path d="M5 12h14" />
        //             <path d="M12 5l7 7-7 7" />
        //         </svg>
        //     </a>
        //     {/* <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        //             <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        //                 <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        //                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        //                     <circle cx={12} cy={12} r={3} />
        //                 </svg>1.2K
        //             </span>
        //             <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        //                 <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        //                 </svg>6
        //             </span>
        //         </div> */}
        // </div>
        // eslint-disable-next-line react/style-prop-object
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

        // <div class="flip-card-container" >
        //     <div class="flip-card">

        //         <div class="card-front">
        //             <figure>
        //                 <div class="img-bg"></div>
        //                 <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake"/>
        //                     <figcaption>Brohm Lake</figcaption>
        //             </figure>


        //         </div>

        //         <div class="card-back">
        //             <figure>
        //                 <div class="img-bg"></div>
        //                 <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake"/>
        //             </figure>

        //             <button>Book</button>


        //         </div>

        //     </div>
        // </div>
    )
}

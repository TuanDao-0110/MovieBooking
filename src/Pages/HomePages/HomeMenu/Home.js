import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { takeFilmAction } from '../../../redux/action/MovieManagerAction'
import { Carousel } from 'antd';
import { history } from '../../../App';

// import styleMenu from './Home.module.scss'
import style from './Home.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { tookMovieCalender } from '../../../redux/action/TheatherManagerAction';
import { DescriptionMovie } from './HomeDescription';
export default function Home(props) {
  const { movieList } = useSelector(state => state.MovieListReducer)
  const { theatherList } = useSelector(state => state.TheatherManageReducer)
  const [readMore, setReadMore] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(

      takeFilmAction()
    )

  }, [])


  const contentStyle = {
    // height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    // width: '100%'
  };


  return (
<div className=''>
   <Carousel dotPosition='bottom'  >
      {movieList.slice(0, 10).map((item, index) => {
        return <div className='' key={index} >
          <div className='grid grid-cols-5' style={{ height: '100vh' }} >

            <div className='col-span-3 relative col-start-2 my-auto flex justify-center' >
              <div className={`${style["card"]}  w-5/6 lg:w-2/6 `}>
                <div className={style["image"]}>
                  <img src={item.hinhAnh} className={`w-full h-full`} style={contentStyle} alt='' />
                </div>
                <div className={style["details"]}>
                  <div className={style["center"]}>
                    <h1>Movie Name:<br /><span>LOREM</span></h1>
                    <p>{DescriptionMovie.slice(0, `${readMore ? 40 : 4000}`)}</p>
                    <i onClick={() => {
                      setReadMore(!readMore)
                    }} className='hover:text-red-400 duration-75 cursor-pointer'>{readMore ? '...[+]' : "[-]"}</i>
                    <ul>
                      <li onClick={() => {
                        history.push(`/detail/${item.maPhim}`)
                        dispatch(tookMovieCalender(item.maPhim))
                      }}>
                        <button className='w-30 hover:text-red-400 duration-75' >Book This Movie</button></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <img src={item.hinhAnh} className={`lg:w-3/6 ${style["imgHome"]} lg:h-2/3 h-full`} style={contentStyle} alt='' /> */}

            </div>
          </div>
        </div>
      })}



    </Carousel >
</div>
   
  )
}

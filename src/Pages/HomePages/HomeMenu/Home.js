import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { takeFilmAction } from '../../../redux/action/MovieManagerAction'
import { Carousel } from 'antd';

// import styleMenu from './Home.module.scss'
import './Home.scss'
export default function Home(props) {
  const { movieList } = useSelector(state => state.MovieListReducer)
  const { theatherList } = useSelector(state => state.TheatherManageReducer)
  // console.log('moivielist', movieList, 'theatherList', theatherList)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(

      takeFilmAction()
    )

  }, [])

  var $demoCont = document.querySelector(".demo-cont");
  const contentStyle = {
    // height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    // width: '100%'
  };


  return (

    <Carousel dotPosition='bottom'  >
      {movieList.slice(0, 5).map((item, index) => {
        return <div className='' key={index} >
          <div className='grid grid-cols-5' style={{ height: '100vh' }} >

            <div className='col-span-3 col-start-2 my-auto flex justify-center' >
              <img src={item.hinhAnh} className='lg:w-3/6 imgHome lg:h-2/3 h-full ' style={contentStyle} alt='' />
            </div>

          </div>
        </div>
      })}



    </Carousel>
  )
}

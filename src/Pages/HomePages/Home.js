import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import MultipleRows from '../../Components/RSlick/MultipleRow'
import { takeFilmAction } from '../../redux/action/MovieManagerAction'
import { tookInforTheather } from '../../redux/action/TheatherManagerAction'
import HomeCarouselAnt from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarouselAnt'
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home(props) {
  const { movieList } = useSelector(state => state.MovieListReducer)
  const { theatherList } = useSelector(state => state.TheatherManageReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(

      takeFilmAction()
    )

  }, [])
  return (
    <div className=''>
      <HomeCarouselAnt></HomeCarouselAnt>
      <div className="container mx-auto mt-10">
        <div>
        <MultipleRows movieList={movieList}></MultipleRows>
        </div>
        <div className='my-10'>
          <HomeMenu theatherList={theatherList}></HomeMenu>
        </div>
      </div>



    </div>
  )
}

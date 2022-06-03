import Slider from "react-slick";
import Film from "../Film/Film";
import React, { useState } from 'react'
import styleSlick from './MultipleRow.module.css'
import { useDispatch } from 'react-redux'
import { SET_AVAILABLE_FILM, SET_COMMING_FILM } from "../../redux/type/MovieManagerType";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-next']}`}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />


    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >

        </div>
    );
}
export default function MultipleRows(props) {
    const dispatch = useDispatch()
    const { movieList } = props
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // variableWidth: true

    };
    const renderMovie = () => {
        return movieList?.map((itemMovie, index) => {

            return <Film {...itemMovie} key={index} ></Film>

        })
    }
    const [activeClass, setActiveClass] = useState({ available: false, coming: false })
    return (
        <div>
            <button type="button" className={`px-8 py-3 font-semibold border rounded border-gray-100 dark:text-gray-100 mx-2 ${styleSlick[activeClass.available === true ? 'active_Film_button' : '']}`} onClick={() => {
                setActiveClass({
                    available: true,
                    coming: false
                })

                dispatch({
                    type: SET_AVAILABLE_FILM
                })
            }}>Avaible</button>
            <button type="button" className={`px-8 py-3 font-semibold border rounded border-gray-100 dark:text-gray-100 mx-2 ${styleSlick[activeClass.coming === true ? 'active_Film_button' : '']}`} onClick={() => {
                setActiveClass({
                    available: false,
                    coming: true
                })
                dispatch({
                    type: SET_COMMING_FILM
                })
            }}>In Comming</button>
            <Slider {...settings}>
                {renderMovie()}

            </Slider>
        </div >

    );

}
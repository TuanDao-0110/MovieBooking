import * as React from 'react';
import { useSelector } from 'react-redux';
import { Rate } from 'antd';

export default function HalfRating(props) {
    const { danhGia } = useSelector(state => state.MovieListReducer.filmDetails)

    return (
        <Rate disabled value={Math.round(danhGia / 2)}  className='text-gray-600'/>
    );
}

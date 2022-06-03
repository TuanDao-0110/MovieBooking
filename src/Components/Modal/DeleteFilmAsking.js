import React from 'react'
import { Popconfirm, message } from 'antd';
import { history } from '../../App';
import { deleteFilmAdmin } from '../../redux/action/MovieManagerAction';


export default function DeleteFilmAsking(props) {
    const { dispatch, FilmId } = props
    const confirm = (e) => {
        dispatch(deleteFilmAdmin(FilmId))
      
    };

    const cancel = (e) => {
        // console.log(e);
        // message.error('Click on No');
    };


    return (
        <Popconfirm
            title="Are you sure to delete this movie?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <a href><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg></a>
        </Popconfirm>


    )
}

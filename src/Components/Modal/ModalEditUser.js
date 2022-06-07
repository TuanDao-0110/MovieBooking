import { Modal } from 'antd'
import React from 'react'

export default function ModalEditUser(props) {
    let render = []
    const renderModalEdit = () => {
     
        return Object.entries(props.dataUser).forEach(e => {

            render.push(<div className='grid grid-cols-3'>
                <div className='col-span-1 uppercase text-red-500'>{e[0]} :</div>
                <div className='col-span-2 text-right text-blue-500'>
                    {e[1]}
                </div>


            </div>)

        })
    }
    renderModalEdit()

    return (
        <Modal title="Confirm" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} >
            {/* {props.dataUser} */}
            <div className='grid grid-cols-3'>
                <div className='col-span-1 text-lg'>State</div>
                <div className='col-span-2 text-right text-lg'>Details</div>

            </div>
            <hr></hr>

            {render}
        </Modal>
    )
}

import { Modal } from 'antd'
import React from 'react'
const listTittleRender = ['Account', 'Password', 'Email', 'Phone', 'Name', "Type User", "Group ID"]
export default function ModalEditUser(props) {
    let render = []
    let index = 0
    const renderModalEdit = () => {

        return Object.entries(props.dataUser).forEach(e => {
            render.push(<div className='grid grid-cols-3'>
                <div className='col-span-1 uppercase text-red-500'>{listTittleRender[index]} :</div>
                <div className='col-span-2 text-right text-blue-500'>
                    {e[1]}
                </div>


            </div>)
                index ++

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

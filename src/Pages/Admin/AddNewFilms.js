import React, { useState } from 'react'
import { uploadFilmAction } from '../../redux/action/MovieManagerAction'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { GroupId } from '../../utilities/Setting/config';
export default function AddNewFilms() {
    const [img, setImg] = useState('');

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            movieName: '',
            trailer: '',
            description: '',
            date: '',
            onState: true,
            hot: false,
            coming: false,
            rating: 0,
            pictureFile: {},
            groupCode : GroupId
        },
        onSubmit: (values) => {
            // console.log(typeof (values))
            let formData = new FormData();
            let formDataNameFomrServer = ['tenPhim', 'trailer', 'moTa', 'ngayKhoiChieu', 'dangChieu', 'hot', 'sapChieu', 'danhGia', 'File','maNhom']
            let index = 0
            for (let key in values) {
                // console.log(values[key])
                // console.log(formDataNameFomrServer[index])
                if (key === 'pictureFile') {
                    formData.append(formDataNameFomrServer[index], values[key], values[key].name)
                }
                else {
                    formData.append(formDataNameFomrServer[index], values[key])
                }
                index++
            }

            console.log('formik', formData.get('File'))
            dispatch(uploadFilmAction(formData))
        }
    })

    const onFormLayoutChange = ({ movieName, trailer }) => {
        // setComponentSize(size);
        // console.log({ movieName, trailer })

    };
    const handleDatePicker = (e) => {
        // console.log(e._d)
        let newDate = moment(e).format('DD/MM/YYYY')
        formik.setFieldValue('date', newDate)
    }
    const handleChangSwitch = (name,) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeFile = (e) => {
        //took file 
        let file = e.target.files[0];

        // create object can read file
        let reader = new FileReader()
        // run code to change to base64 style
        reader.readAsDataURL(file)
        // run to active load

        reader.onload = (e) => {
            setImg(e.target.result)
            formik.setFieldValue('pictureFile', file)
        }


    }
    return (
        <div>
            <h1>Add New Movie</h1>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: 'large',
                }}
                onSubmitCapture={() => {
                    formik.handleSubmit()
                }}
                onValuesChange={onFormLayoutChange}
            //   size={componentSize}
            >

                <Form.Item label="Movie Name" name='movieName' >
                    <Input name='movieName' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer" name='trailer'>
                    <Input name='trailer' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Description" name='description'>
                    <Input name='description' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Date" name='date'>
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleDatePicker} />
                </Form.Item>
                <Form.Item label="On State" valuePropName="checked" name='onState'>
                    <Switch name='onState' onChange={handleChangSwitch('onState')} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked" name='hot'>
                    <Switch onChange={handleChangSwitch('hot')} />
                </Form.Item>
                <Form.Item label="Coming" valuePropName="checked" name='coming'>
                    <Switch onChange={handleChangSwitch('coming')} />
                </Form.Item>
                <Form.Item label="Rating" name='rating'>
                    <InputNumber max={10} min={0} onChange={handleChangSwitch('rating')} />
                </Form.Item>
                <Form.Item label="Picture Upload" name=''>
                    <input type='file' onChange={handleChangeFile} accept="image/png, image/jpeg" />
                    <br>
                    </br>
                    <img src={img} alt='' className='w-16 h-16' />
                </Form.Item>
                <Form.Item label="Action: ">
                    <Button type="primary" htmlType="submit">Submit New Film</Button>
                </Form.Item>
            </Form>

        </div>
    )
}

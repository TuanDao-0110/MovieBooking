import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filmInforAdminAction, updateFilmAdmin, } from '../../redux/action/MovieManagerAction';
import { GroupId } from '../../utilities/Setting/config';
import moment from 'moment';
import { Button, Form, } from 'antd';
import { useSelector } from 'react-redux';
import _ from 'lodash'



export default function EditFilm(props) {
    const [img, setImg] = useState();
    const { filmDetailsForAdmin } = useSelector(state => state.MovieListReducer)



    useEffect(() => {
        dispatch(filmInforAdminAction(props.match.params.id))


    }, [])

    const dispatch = useDispatch()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            filmId: props.match.params.id,
            movieName: filmDetailsForAdmin?.tenPhim,
            trailer: filmDetailsForAdmin?.trailer,
            description: filmDetailsForAdmin?.moTa,
            date: filmDetailsForAdmin?.ngayKhoiChieu,
            onState: filmDetailsForAdmin?.dangChieu,
            hot: filmDetailsForAdmin?.hot,
            coming: filmDetailsForAdmin?.sapChieu,
            rating: filmDetailsForAdmin?.danhGia,
            pictureFile: filmDetailsForAdmin?.hinhAnh,
            groupCode: GroupId
        },
        onSubmit: (values) => {
            // console.log(typeof (values))
            let formData = new FormData();
            let formDataNameFomrServer = ['maPhim', 'tenPhim', 'trailer', 'moTa', 'ngayKhoiChieu', 'dangChieu', 'hot', 'sapChieu', 'danhGia', 'File', 'maNhom']
            let index = 0
            for (let key in values) {
                // console.log(values[key])
                // console.log(formDataNameFomrServer[index])
                if (key === 'pictureFile' && !_.isEmpty(img)) {
                    formData.append(formDataNameFomrServer[index], values[key], values[key].name)
                }
                else {
                    formData.append(formDataNameFomrServer[index], values[key])
                }
                index++
            }
            dispatch(updateFilmAdmin(formData))
        }
    })

    const onFormLayoutChange = ({ movieName, trailer }) => {
        // setComponentSize(size);
        // console.log({ movieName, trailer })

    };
    const handleDatePicker = (e) => {
        let newDate = moment(e.target.value)
        formik.setFieldValue('date', newDate)
    }
    const handleChangSwitch = (name,) => {
        return (e) => {
            formik.setFieldValue(name, e.target.value)
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
                <form label="nameMovie" name='nameMovie'>
                    <label>Movie Name :</label>
                    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='movieName' value={formik.values.movieName} onChange={formik.handleChange} />
                </form>
                <form label="Trailer" name='trailer'>
                    <label>Trailer :</label>
                    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='trailer' value={formik.values.trailer} onChange={formik.handleChange} />
                </form>
                <form label="Description" name='description'>
                    <label> Description :</label>
                    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='description' value={formik.values.description} onChange={formik.handleChange} />
                </form>
                <form label="Date" name='date'>
                    <label>Date </label>
                    <input type='date' className='' value={moment(formik.values.date).format("YYYY-MM-DD")} name='date' onChange={handleDatePicker} />

                </form>

                <form label="onState" valuePropName="onState" name='onState' id='onState'>
                    <label>On state</label>
                    <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" name='onState' id="default-toggle" class="sr-only peer" checked={formik.values.onState} onChange={(e) => {
                            formik.setFieldValue('onState', e.target.checked)
                        }} />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </form>


                <form label="Hot" valuePropName="hot" name='hot' id='hot'>
                    <label>Hot</label>
                    <label for="checked-toggle-hot" class="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="" id="checked-toggle-hot" class="sr-only peer" checked={formik.values.hot} onChange={(e) => {
                            formik.setFieldValue('hot', e.target.checked)
                        }} />
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </form>


                <form label="coming" valuePropName="coming" name='coming' id='coming'>
                    <label>Coming</label>
                    <label for="checked-toggle-coming" class="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="" id="checked-toggle-coming" class="sr-only peer" checked={formik.values.coming} onChange={(e) => {
                            formik.setFieldValue('coming', e.target.checked)
                        }} />
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </form>

                <form label="Rating" name='rating'>
                    <label>Rating</label>
                    <input max={10} min={0} type='number' name='rating' defaultValue={formik.values.rating} onChange={handleChangSwitch('rating')} />
                </form>
                <Form.Item label="Picture Upload" name=''>
                    <input type='file' onChange={handleChangeFile} accept="image/png, image/jpeg" />
                    <br>
                    </br>

                    <img src={_.isEmpty(img) ? filmDetailsForAdmin.hinhAnh : img} alt='' className='w-16 h-16' />
                </Form.Item>
                <Form.Item label="Action: ">
                    <Button type="primary" htmlType="submit">Edit Film</Button>
                </Form.Item>
            </Form>

        </div>
    )
}

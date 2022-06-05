import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Input, Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { tookInforStateLocation, tookStateInfor } from '../../redux/action/TheatherManagerAction';
import { theaterManagerServices } from '../../Services/TheaterManagerServices';
import { info } from 'autoprefixer';
import moment from 'moment';
import { createNewFilmCalender } from '../../redux/action/BookingTicketAction';
import { FILM_INFOR } from '../../redux/type/utility';
import _ from 'lodash'
const { Option } = Select;
export default function ShowTime(props) {
  const [state, setState] = useState({
    movieState: [],
    stateLocation: [],
  })
  const infor = useRef({
    "maPhim": props.match.params.id,
    "ngayChieuGioChieu": "12/12/2022 12:22:00",
    "maRap": "bhd-star-cineplex-vincom-quang-trung",
    "giaVe": 75000,
  })

  const { tenPhim, hinhAnh } = JSON.parse(localStorage.getItem(FILM_INFOR))

  const handleChange = (e) => {
    tookInforStateLocation(e).then(result => setState({ ...state, stateLocation: result }))

  }
  const handleChangeLocation = (e) => {
    infor.current.maRap = e

  }
  const handleChangeNumber = (e) => {
    infor.current.giaVe = e.target.value

  }
  const handleChangeTime = (e) => {
    // console.log(moment(e).format("DD/MM/YYYY hh:mm:ss"))

    infor.current.ngayChieuGioChieu = moment(e).format("DD/MM/YYYY hh:mm:ss")
  }

  console.log(infor.current.maPhim)
  useEffect(() => {
    tookStateInfor().then(e => setState({ ...state, movieState: e }))
  }, [])
  return (
    <div  >
      <h2>Change Film : ------- {tenPhim}</h2>
      <img className='w-20 h-24 ' src={hinhAnh} alt='' onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = "https://api.lorem.space/image/movie?w=150&h=220";
      }}></img>
      <Form.Item>


        <label className=' pr-10'> Select State Name</label>
        <Select
          showSearch
          style={{
            width: '500',
          }}
          placeholder="Search to Select"
          // optionFilterProp="children"
          // filterOption={(input, option) => option.children.includes(input)}
          // filterSort={(optionA, optionB) =>
          //   optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
          // }
          onChange={handleChange}
        >
          {state.movieState?.map((state, index) => {
            return <Option value={state.maHeThongRap} key={index} label='ok'>
              <label className='text-green-400 uppercase'>{state.tenHeThongRap}<img src={state.logo} alt='' className='w-5 h-5 rounded-full' /> </label>


            </Option>

          })}

        </Select>

      </Form.Item>
      <Form.Item>

        <label className=' pr-10'> Select State Location</label>
        <Select
          showSearch
          style={{
            width: '500',
          }}
          placeholder="Search to Select"
          // optionFilterProp="children"
          // filterOption={(input, option) => option.children.includes(input)}
          // filterSort={(optionA, optionB) =>
          //   optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
          // }
          onChange={handleChangeLocation}
        >
          {state.stateLocation?.map((location, index) => {
            return <Option value={location.maCumRap} key={index} label='ok'>
              <label className='text-green-400 uppercase'>{location.tenCumRap} </label>
            </Option>

          })}
        </Select>

      </Form.Item>
      <Form.Item>

        <label>Date </label>
        <br></br>
        <Space direction="vertical" >
          <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={handleChangeTime} />

        </Space>

      </Form.Item>
      <Form.Item>
        <label>Ticket Price</label>
        <Input min={75000} type='number' max={150000} onChange={handleChangeNumber}></Input>
      </Form.Item>
      <Form.Item>
        <Button onClick={() => {
          createNewFilmCalender(infor.current).then()
        }}>Submit</Button>
      </Form.Item>
    </div>
  )
}

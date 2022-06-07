import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUserAction, searchUserAction, takeUserListAction } from '../../redux/action/UserManagerAction'
import { CLOSE_LOADING, OPEN_LOADING } from '../../redux/type/MovieManagerType'
import { Table, Button, Space, Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { reduceEachLeadingCommentRange } from 'typescript'
import { history } from '../../App'
import { EDIT_USER_TEMP } from '../../redux/type/utility';


export default function Users() {
  // useState for list User 
  const [userList, setUserList] = useState()
  // get User Function 
  const getListUser = () => {
    takeUserListAction().then(e => setUserList(e.data.content))
    dispatch({ type: OPEN_LOADING })
    setTimeout(() => {

      dispatch({ type: CLOSE_LOADING })
    }, 3000);
  }
  // findUser Function 
  const findUser = (value) => {
    dispatch({ type: OPEN_LOADING })
    searchUserAction(value).then(result => {
      setUserList(result)
    })
    setTimeout(() => {

      dispatch({ type: CLOSE_LOADING })
    }, 500);
  }
  // dispatch 
  const dispatch = useDispatch()
  dispatch({
    type: OPEN_LOADING
  })
  // renderDidMount to clone listuser date from API : 
  // 1. setTimeout to on/off Loading component
  useEffect(() => {
    getListUser()
  }, [])

  // table data 

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'hoTen',
      key: 'hoTen',

      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
      sortOrder: sortedInfo.columnKey === 'hoTen' ? sortedInfo.order : null,
      // ellipsis: true,
    },
    {
      title: 'Account',
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortOrder: sortedInfo.columnKey === 'taiKhoan' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      // filters: [
      //   {
      //     text: 'London',
      //     value: 'London',
      //   },
      //   {
      //     text: 'New York',
      //     value: 'New York',
      //   },
      // ],
      // filteredValue: filteredInfo.address || null,
      // onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
      ellipsis: true,
    }, {
      title: "Account type ",
      dataIndex: 'maLoaiNguoiDung',
      key: 'maLoaiNguoiDung',
      sorter: (a) => a.maLoaiNguoiDung !== 'KhachHang',
      sortOrder: sortedInfo.columnKey === 'maLoaiNguoiDung' ? sortedInfo.order : null,
      ellipsis: true,

    }, {
      title: 'Action',
      dataIndex: 'taiKhoan',
      render: (item, list) => {

        return <div key={item} className='grid grid-cols-2'>
          <button onClick={() => {
            history.push(`/admin/users/${item}`)
            localStorage.setItem(EDIT_USER_TEMP, JSON.stringify(list))
          }} value={list} className='hover:text-green-400'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg></button>
          <button
            onClick={() => {
              deleteUserAction(item, dispatch)
            }}
            value={list} className='hover:text-red-400'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></button>

        </div>
      },
      // value: (text, object) => { return <>{text}</> },
    }
  ];
  // search data
  const { Search } = Input;
  const onSearch = (value) => {
    if (value !== '') {
      findUser(value)
    } else {
      getListUser()
    }
  }

  return (
    <>
      <h1> User List</h1>
      <Search
        placeholder="input search Key --- Click empty search to clone whole list"
        onSearch={onSearch}
        style={{
          width: '100%',
          marginBottom: '15'
        }}
      />
      <Space
        style={{
          marginBottom: 16,

        }}
      >

      </Space>
      <Table columns={columns} dataSource={userList} onChange={handleChange} />
    </>
  )
}



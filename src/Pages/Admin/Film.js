import React, { useEffect, useRef, useState } from 'react'
import { Table, Button, Space, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { takeFilmAction } from '../../redux/action/MovieManagerAction';
import { NavLink } from 'react-router-dom';
import { Popconfirm, message } from 'antd';
import DeleteFilmAsking from '../../Components/Modal/DeleteFilmAsking';
import { FILM_INFOR } from '../../redux/type/utility';
import { OPEN_LOADING } from '../../redux/type/MovieManagerType';
import { DescriptionMovie } from '../../Pages/HomePages/HomeMenu/HomeDescription'
const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};

const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};




export default function Film(props) {
  let data;
  // call API to take movie list 
  const { arrFilmDefault } = useSelector(state => state.MovieListReducer)
  data = arrFilmDefault
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: OPEN_LOADING
    })

    dispatch(takeFilmAction())
  }, [])




  // this for sorting function
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination,);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };



  // this for Search -->
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  // <--- this for search


  //  Data
  const columns = [
    {
      title: 'Movie ID',
      dataIndex: 'maPhim',
      value: (text, object) => { return <>{text}</> },
      key: 'maPhim',
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortOrder: sortedInfo.columnKey === 'maPhim' ? sortedInfo.order : null,
      ellipsis: true,
      width: 150,
      ...getColumnSearchProps('maPhim'),

    },
    {
      title: 'Movie Name',
      dataIndex: 'tenPhim',
      key: 'tenPhim',
      render: (moTa) => { return "Lorem" },
      sorter: (a, b) => a.tenPhim.length - b.tenPhim.length,
      sortOrder: sortedInfo.columnKey === 'tenPhim' ? sortedInfo.order : null,
      ellipsis: true,
      // ...getColumnSearchProps('tenPhim'),
      width: 'auto',
    },
    {
      title: ' Picture',
      dataIndex: 'hinhAnh',
      width: 150,
      render: (hinhAnh, film) => {
        return <>
          <img src={hinhAnh} alt="" className='w-16 h-16 rounded-full' onError={(e) => { e.target.onError = null; e.target.src = "https://api.lorem.space/image/movie?w=300&h=200" }}></img>
        </>
      },
      fixed: 'center',

    }, {
      title: ' Discription',
      dataIndex: 'moTa',
      width: 150,
      render: (moTa) => DescriptionMovie.length > 50 ? DescriptionMovie.slice(0, 50) : DescriptionMovie,
      fixed: 'center',

    },
    {
      title: 'Action',
      data: 'maPhim',
      render: (text, film) => <div className='flex flex-row  justify-between w-full'>
        <NavLink className='' to={`/admin/film/edit/${text.maPhim}`}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg></NavLink>
        <DeleteFilmAsking FilmId={text.maPhim} dispatch={dispatch} ></DeleteFilmAsking>
        <NavLink className='' to={`/admin/film/showtimes/${text.maPhim}`} onClick={() => {
          localStorage.setItem(FILM_INFOR, JSON.stringify(film))
        }}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg></NavLink>

      </div>,
      width: "10%"
    }
  ]
  return (
    <div className='w-full h-full m-0'>

      <h1 className='text-center text-lg text-gray-700'> Film Managerment</h1>
      <Button onClick={() => {
        props.history.push('/admin/film/addnew')
      }}> Add Movie</Button>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  )
}

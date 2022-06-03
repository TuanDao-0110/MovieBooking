import React from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {
  const { loading } = useSelector(state => state.LoadingReducer)
  return loading ?

    <div className='bg-slate-400 w-screen h-screen opacity-75 flex items-stretch fixed top-0 left-0' style={{ zIndex: '99' }}>

      <div className="w-16 m-auto  h-16 border-4 border-dashed rounded-full animate-spin border-rose-600"></div>
    </div>
    : <></>
}

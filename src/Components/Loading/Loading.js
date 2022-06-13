import React from 'react'
import { useSelector } from 'react-redux'
import styleLoading from './Loading.module.scss'
export default function Loading() {
  const { loading } = useSelector(state => state.LoadingReducer)
  return loading ?
    <div className={`${styleLoading['bodyLoading']} w-screen`}>

      <div className={styleLoading["loading"]}>
        <div class={styleLoading["arc"]}></div>
        <div class={styleLoading["arc"]}></div>
        <div class={styleLoading["arc"]}></div>
      </div>
    </div>
    : <></>
}

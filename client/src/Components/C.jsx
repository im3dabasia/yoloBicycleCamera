import React from 'react'
import { useSelector } from 'react-redux'
const C = () => {
  const name = useSelector((state)=>state.nameReducer.name)
  return (
    <div>{name}</div>
  )
}

export default C
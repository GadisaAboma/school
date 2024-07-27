import React from 'react'
 import image from './ll.jpg'
import './spinner.css'
// import CircularProgress from '@mui/material/CircularProgress' 

const spinner = () => {
  return (
    <div className="containerSpinner">
     {/* <CircularProgress/> */}
    <img className="img" alt="spinner img" src={image} />
    </div>
  )
}
export default spinner
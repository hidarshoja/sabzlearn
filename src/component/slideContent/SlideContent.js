import React, { useState } from 'react'
import './slide.css'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import { StayPrimaryPortraitSharp } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function SlideContent(props) {
  return (
    
      <div className="boxProdact">
        <div>
          <img src={props.img} />
        </div>
        <div>
          <h3>{props.title}</h3>
        </div>
        <div>
          <p className="price">
            {props.price}
            <span>هزار تومان</span>
          </p>
        </div>
        <div>
          <Button variant="contained" endIcon={<SendIcon />}>
            {' '}
            مشاهده{' '}
          </Button>
        </div>
      </div>
   
  )
}

export default SlideContent

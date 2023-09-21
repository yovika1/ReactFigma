import React from 'react'
import "./Head.css"
import boy from './Group 11 .png'
function Head() {
  return (
    <>
    <div className="intro">
    <div className="header1">
 <p className='txt1'>Hey, I am John</p>
<p className='txt2'>I create product design </p>
<p className='txt3'>and brand experience</p>
<p className='txt4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p className='txt5'>Suspendisse varius enim in eros elementum tristique.</p>
</div>
<div>
    <img className="imgg" src={boy} alt="" />
</div>
</div>
    </>
   
  )
}

export default Head
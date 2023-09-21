import React from 'react'
import './frm.css'
function form() {
  return (
    <>
    <div className='get'>Get in Touch</div>
    <div className='headcnct'>Contact Me</div>
    <div className='descpt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus officia veritatis harum?</div>
    <div >
    <form className='form'>
      
      <div className='name1'>
    <label for="name"className='nme'>Name</label>
    <input type="txt" placeholder=""></input> 
   
    </div>
    <div>
    <label for="lastname" className='lstname'>Last Name</label>
    <input type="text" className='spc' placeholder=""></input>
    </div>
<div>
      <label htmlFor="" className='Em'>Email</label>
    <input type="txt" placeholder =''className='spc'></input>
    </div>
    <div>
      <label htmlFor="" className='Phno'>Phone Number</label>
      <input type="text"  className='spc' placeholder='' />
    </div>
    <div>
      <label htmlFor="" className='slct'>Select one</label>
      <select name="" id=""></select>
    </div>
    <div>
      <label htmlFor="" className='msg'>Message</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>

    </form>
    </div>
   </>
  )
}

export default form;
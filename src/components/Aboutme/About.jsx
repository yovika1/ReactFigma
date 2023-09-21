import React from 'react'
import './about.css'
import devlp from './About Me.png'
function abut() {
  return (
    <div className='abt1'>
        <div className="pic">
            <img src={devlp} alt="" />
        </div>
        <div className="about">
            <span className='headabt1'>About</span>
            <div className="headabt">About Me</div>
            <div className="abouttxt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia accusamus dolorem autem reprehenderit commodi voluptates repudiandae totam beatae iusto molestias nemo, deleniti et optio laudantium, incidunt, ipsum ratione. Vel dolorem consequuntur tenetur blanditiis.</div>
        </div>
    </div>
  )
}

export default abut
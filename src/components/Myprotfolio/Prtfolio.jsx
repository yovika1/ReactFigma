import React from 'react'
import './Folio.css'
import pimg from './Social icon.png'
import fileimg from './protofile.png'
import fileimg1 from './protofile1.png'
import fileimg2 from './protofile2.png'
import arrow from './Vector.png'

function folio(props) {
  const folioData=[{heading:"Ahuse" ,desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis est velit?" ,view:"view in dribble"},
  {heading:"Ahuse" ,desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis est velit?",view:"view in dribble"},
  {heading:"Ahuse" ,desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis est velit?",view:"view in dribble"}]
  return (
    <> 
    <div className='port'>
    <div className="prtfliotxt">Recent Project</div>
    <div className="prtfliotxt1">My Portfolio</div>
    <div className="visitwb">
       <img src={pimg} alt="" height={20} width={20}/> Visit My Drible
    </div>
    <div className="imgdiv">
    <div>
      <img className='prtimg' src={fileimg1}alt=""/>
    </div>
   <div> 
    <img className='prtimg' src={fileimg}alt=""/>
   </div>
   <div>
    <img  className='prtimg'src={fileimg2}alt=""/>
    </div>
    </div>
    <div className="Ptfolio">
      {
        folioData.map((item,index)=>{
         return   <div className="prtcart">
      <div className="headng">{item.heading}</div>
      <div className="headdesc">{item.desc}</div>
      <span className="view">{item.view}</span>
       <img className='arrw' src={arrow} alt=""/>
      
    </div>
        })
      }
    </div>
    
    </div>
    </>
  )
}

export default folio
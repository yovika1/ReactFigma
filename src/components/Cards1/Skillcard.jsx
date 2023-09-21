import React from 'react'
import './Skillcard.css'
import feather from './feather-pe1.png'
import chain from './product-chain.png'
import frag from './fragmttag.png'
import tag from './tag 1.png'
function Skillcard(props) {
  const cardData = [{title: "Strategy & Direction",img: chain, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis est velit?"},
  {title: "Branding & Logo",img: feather, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis est velit?"},{title: "UI & UX Design",img:frag, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis est velit?"},{title: "Webflow Development",img:tag, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis est velit?"}]
  return (
    <> 
    <div className='skil'>
    <p className="top">My Skill</p>
    <p className="top1">My Expertise</p>
    <div className='style'>
    {
      cardData.map((item, index)=>{
      return  <div className="crd">
        <div className="sklimg">
        <img src={item.img} alt=""/>
        </div>
        <div className="headingtxt">{item.name}</div>
        <div className="smptxt">{item.desc}</div>
    </div>
      })
    }
    </div>
    
    </div>
    </>
  )
}

export default Skillcard
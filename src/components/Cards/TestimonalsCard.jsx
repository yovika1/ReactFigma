import React from "react";
import "./index.css";
import stars from "./Vector.svg";
function TestimonalsCard(props)
 {
  const user  = [{name : "Dianne Russell"},{name : "Kristin Watson"},{name : "Kathryn Murphy"},]
  
  return (

    <div className="feedbck">
      <div className="feed">Client Feedback</div>
      <div className="feed1">Customer Testimonials </div>

      <div className='cards'>
        {user.map((item , index)=>{
          return<>
<div className="cardBox">
        <div className="rating">
          <img src={stars} alt="" srcset="" />
          <img src={stars} alt="" srcset="" />
          <img src={stars} alt="" srcset="" />
          <img src={stars} alt="" srcset="" />
          <img src={stars} alt="" srcset="" />
        </div>
        <div className="text">
            {props.desc}
        </div>
        <div className="user">
            <div>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" height={"70px"} width={"70px"} srcset="" />
            </div>
            <div>
                <span>{props?.name}</span>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sit molestiae odit quae dolorum non eius quasi velit dignissimos voluptate. Illo delectus tenetur, enim debitis incidunt veniam et nam vitae!
                </p>
            </div> 
        </div>
      </div>
          </>
        })}
      </div>
      
    </div>
  );
}

export default TestimonalsCard;

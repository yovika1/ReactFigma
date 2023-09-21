import React from "react";
import "./frm.css";
function form() {
  return (
    <>
      <div className="container">
        <div className="get">Get in Touch</div>
        <div className="headcnct">Contact Me</div>
        <div className="descpt">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus officia veritatis harum?
        </div>
        <div>
          <div className="row">
            <div className="inp">
              <label>First Name</label>
              <input />
            </div>
            <div className="inp">
              <label>Last Name</label>
              <input />
            </div>
          </div>
          <div className="row">
            <div className="inp">
              <label>Email </label>
              <input />
            </div>
            <div className="inp">
              <label>Phone Number</label>
              <input />
            </div>
          </div>
          <div className="inp">
            <label htmlFor="">Chosse Topic</label>
            <select name="" id="">
              <option value="">ghjkl;'</option>
              <option value="">ghjkl;'</option>
              <option value="">ghjkl;'</option>
              <option value="">ghjkl;'</option>
            </select>
          </div>
          <div className="inp">
          <label htmlFor="">Message</label>
          <textarea rows={10} />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default form;

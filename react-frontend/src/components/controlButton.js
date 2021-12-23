import React from 'react';
import '../css/controlButtons.css'

function ControlButton(props) {
  return (
  <div>
      <button className= {props.type}>
        <img src= {props.iconPath} alt="" />
      </button>
  </div>);
}

export default ControlButton;

import React, { useState } from 'react';

const Burger = ({showSidebar, buttonState}) => {
  return (
    <div className="navbar-icon" >
        <input type="checkbox" id="hi" onChange={showSidebar} checked={buttonState} />
        <label className="menu" htmlFor="hi">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </label>

    </div>
  )
}

export default Burger
import React, { useState, useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Prototype from 'prop-types';




const BottomButton=({text,colorClass,icon,onBtnClick})=>{

  return (
    <button
    type="button"
    className={`btn btn-block no-border ${colorClass}`}
    onClick={()=>{onBtnClick()}}
    >
    <FontAwesomeIcon
    size="lg"
    icon={icon}
    className='mr-2'
   
    />{text}
    </button>
  )

}

BottomButton.prototype={
    text:Prototype.string,
    colorClass:Prototype.string,
    icon:Prototype.string,
    onClick:Prototype.func,
}

export default BottomButton
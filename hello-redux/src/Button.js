import React from 'react';

export default (props) => {
  return <button onClick={(e) => {
    e.preventDefault()
    props.handleClick()
  }}>
    {props.children}
  </button>
}

import React from 'react';
import {connect} from 'react-redux';
import Button from './Button';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch({type: 'DECREMENT'})
  }
}

export default connect(null, mapDispatchToProps)(Button)

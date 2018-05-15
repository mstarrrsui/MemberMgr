import React from 'react';
import PropTypes from 'prop-types';
import log from 'loglevel';








const LogProps = (WrappedComponent) => {
    //log.info('[Props]:'+ JSON.stringify(props))
    return (props) => {
      <div>
        <WrappedComponent {...props}/>
      </div>
    };
  };
  

export default LogProps;

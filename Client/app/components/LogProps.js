import React from 'react';
import PropTypes from 'prop-types';
import log from 'loglevel';








const LogProps = (WrappedComponent) => {
    const Logger = props => {
      <div>
        <WrappedComponent {...props}/>
      </div>
    };

    return Logger
  };
  

export default LogProps;

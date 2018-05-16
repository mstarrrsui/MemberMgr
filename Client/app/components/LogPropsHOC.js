import React from 'react';
import PropTypes from 'prop-types';
import log from 'loglevel';



class LogPropsHOC extends React.Component {
    render() {
        const {children} = this.props;
        log.info("LogPropsHOc:Props:", this.props)
        return children({sampleText:'MIKEHOC'});
    }
}
    
  

export default LogPropsHOC;

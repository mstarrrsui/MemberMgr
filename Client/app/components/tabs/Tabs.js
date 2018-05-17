import React from 'react';
import PropTypes from 'prop-types';
import log from 'loglevel';

export default class Tabs extends React.Component {
    
    state = {
      activeTab: 1
    }
    
    
  
    componentDidMount = () => {
    }

    _renderTabStrip = () => {
        <div></div>
    }

    _renderTabPanel = () => {
        <div></div>
    }


    render() {

      return (
          <div>           
            { this._renderTabStrip() }  
            { this._renderTabPanel() }
          </div>
        );
    }
  }
  

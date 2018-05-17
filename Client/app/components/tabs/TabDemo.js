import React from 'react';
import PropTypes from 'prop-types';
import log from 'loglevel';
import TabPanel from './TabPanel'
import Tabs from './Tabs'

export default class TabDemo extends React.Component {
    
 
    componentDidMount() {
    }

    render() {

      return (
          <div>           
            
            <h2>Tab Panel Demo</h2>
         
            <Tabs>
              <TabPanel id="1" title="Tab 1">
                <div><h3>Tab 1</h3></div>
              </TabPanel>
              <TabPanel id="2" title="Tab 2">
                <div><h3>Tab 2</h3></div>
              </TabPanel>
              <TabPanel id="3" title="Tab 3">
                <div><h3>Tab 3</h3></div>
              </TabPanel>
            </Tabs>
         </div>
        );
    }
  }
  

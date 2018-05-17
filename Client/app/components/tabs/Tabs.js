import React from 'react';
import PropTypes from 'prop-types';
import log from 'loglevel';

export default class Tabs extends React.Component {
    
    state = {
      activeTab: 0
    }
    
    
  
    componentDidMount = () => {
    }

    _renderTabStrip = () => {
        const {children} = this.props;
        const liststyle = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }

        return (
            <div>
                <ul style={liststyle}>
                    {children.map( t => 
                        <li key={t.props.id}>{t.props.title}</li>
                    )}
                </ul>
            </div>
        );
    }

    _renderTabPanel = () => {
        const {children} = this.props;
        const {activeTab} = this.state;
        return children[activeTab].props.children;
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
  

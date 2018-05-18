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
        const {children} = this.props;
        const {activeTab} = this.state;
        const liststyle = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "left"
        }

        return (
            <div>
                {children.map( t => {
                    const isActive = activeTab === parseInt(t.props.id)
                    const btnClass = `btn btn-primary btn-lg ${isActive ? 'active' : ''}`

                    return (
                        <a href="#" key={this.props.id} className={btnClass} role="button" aria-pressed="true">{t.props.title}</a>
                    )
                }
                )}
            </div>

        );
    }

    _renderTabPanel = () => {
        const {children} = this.props;
        const {activeTab} = this.state;
        return children[activeTab-1].props.children;
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
  

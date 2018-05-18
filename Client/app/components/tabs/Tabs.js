import React from 'react';
import PropTypes from 'prop-types';
import log from 'loglevel';

export default class Tabs extends React.Component {
    
    state = {
      activeTab: 1
    }
    
    
  
    componentDidMount = () => {
    }

    handleTabClick = (index,event) => {       
        event.preventDefault();
        this.setState((state) => ({ activeTab: index}));
    }

    renderTabStrip = () => {
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
                    const tabIdx = parseInt(t.props.id);
                    const isActive = activeTab === tabIdx;
                    const btnClass = `btn btn-primary btn-lg ${isActive ? 'active' : ''}`

                    return (
                        <a href="#" 
                        key={tabIdx} 
                        className={btnClass} 
                        role="button" 
                        aria-pressed="true"
                        onClick={(e) => this.handleTabClick(tabIdx,e)}>
                            {t.props.title}
                        </a>
                    )
                }
                )}
            </div>

        );
    }

    renderTabPanel = () => {
        const {children} = this.props;
        const {activeTab} = this.state;
        return children[activeTab-1];
    }


    render() {

      return (
          <div>
            { this.renderTabStrip() }  
            { this.renderTabPanel() }
          </div>
        );
    }
  }
  

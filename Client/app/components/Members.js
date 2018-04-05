import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import MemberList from './MemberList';
import MemberApi from '../api/mockMemberApi'


class Members extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        members: null
      }
    }
  
    componentDidMount() {
      this.loadMembers();
    }

    loadMembers() {
      MemberApi.getAllMembers()
            .then(members => {
                this.setState(function () {
                    return {
                        members: members
                    }
                });
            })
            .catch(error => {
              throw(error)
            });
    }

    render() {
      return (
        <div>
          <h1>Members</h1>
          <input type="submit"
                 value="Add Member"
                 className="btn btn-primary"/>
         
          { !this.state.members
          ? <Loading speed={90} text='DOWNLOADING'/>
          : <MemberList members={this.state.members}/> }
          
        </div>
      );
    }
  }
  
  export default Members;
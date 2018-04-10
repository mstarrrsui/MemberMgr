import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import MemberList from './MemberList';
import MemberForm from './MemberForm';
import MemberApi from '../api/mockMemberApi'
import log from 'loglevel';
import Modal from 'react-responsive-modal';

import { US_STATES } from '../data/states'


class Members extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        members: null,
        inAddMode: false
      }
    }
  
    componentDidMount() {
      log.info(US_STATES[6]);
      this.loadMembers();
    }

    onAddClicked = () => {
      this.setState({ inAddMode: true });
    }

    onCloseModal = () => {
      this.setState({ inAddMode: false });
    }

    loadMembers() {
      MemberApi.getAllMembers()
               .then( (members) => this.setState( () => ({ members: members}) ))
               .catch( error => { throw(error); })
    }

    render() {
      const { inAddMode } = this.state;
      return <div>
          <h1>Members</h1>

          <MemberForm/>


          <input type="submit" value="Add Member" className="btn btn-primary" onClick={this.onAddClicked} />

          {!this.state.members  ? <Loading speed={90} text="DOWNLOADING" /> : <MemberList members={this.state.members} />}

          <Modal open={inAddMode} 
                 onClose={this.onCloseModal} 
                 little 
                 classNames={{ modal: 'custom-modal' }}>
            <h2>Add New Member</h2>

          </Modal>
        </div>;
    }
  }
  
  export default Members;
import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import MemberList from './MemberList';
import MemberApi from '../api/mockMemberApi'
import log from 'loglevel';
import Modal from 'react-responsive-modal';


class Members extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        members: null,
        inAddMode: false
      }
    }
  
    componentDidMount() {
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

          
          

          {!this.state.inAddMode ? <input type="submit" value="Add Member" className="btn btn-primary" onClick={this.onAddClicked} /> : null}

          {!this.state.members && !this.state.inAddMode ? <Loading speed={90} text="DOWNLOADING" /> : <MemberList members={this.state.members} />}

          <Modal open={inAddMode} 
                 onClose={this.onCloseModal} 
                 little 
                 classNames={{ modal: 'custom-modal' }}>
            <h2>Add New Member</h2>
            <div>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
              </div>
            </div>
          </form>
        </div>
          </Modal>
        </div>;
    }
  }
  
  export default Members;
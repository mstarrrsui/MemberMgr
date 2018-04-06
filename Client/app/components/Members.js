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
    };

    onCloseModal = () => {
      this.setState({ inAddMode: false });
    };

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
      const { inAddMode:open } = this.state;
      return (
        <div>
          <h1>Members</h1>
        
          { !this.state.inAddMode 
            ? <input type="submit"
                value="Add Member"
                className="btn btn-primary"
                onClick={this.onAddClicked}/>
            : null }
          
  
            { !this.state.members && !this.state.inAddMode
            ? <Loading speed={90} text='DOWNLOADING'/>
            : <MemberList members={this.state.members}/> }

            <Modal open={open} onClose={this.onCloseModal} little>
              <h2>Simple centered modal</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
              </p>
            </Modal>
          
        </div>
      );
    }
  }
  
  export default Members;
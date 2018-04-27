import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import MemberList from './MemberList';
import MemberForm from './MemberForm';
import MemberApi from '../api/mockMemberApi'
import log from 'loglevel';

import { US_STATES } from '../data/states'


class Members extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        members: null
      }
    }
  
    componentDidMount() {
      log.info(US_STATES[6]);
      this.loadMembers();
    }

    onAddClicked = ({firstName, lastName, address1, city, addrState, zipcode}) => {
      //TODO - update list
      //       save to DB (MOCKED)
      //        reload from the DB



      //this.setState({ inAddMode: true });
      MemberApi.addMember({
        "MemberFirstName":  firstName,
        "MemberLastName":  lastName,
        "StreetAddress":  address1,
        "State":  addrState,
        "City":  city,
        "Zipcode":  zipcode,
        "MemberStatus":  "M",
        "DateJoined":  "8/8/2017"
      }).then(this.loadMembers());

    }


    loadMembers() {
      MemberApi.getAllMembers()
               .then( (members) => this.setState( () => ({ members: members}) ))
               .catch( error => { throw(error); })
    }

    render() {
      return <div>
          <h1>Members</h1>
          <MemberForm onSubmit={this.onAddClicked}/>
          {!this.state.members  
            ? <Loading speed={90} text="DOWNLOADING" /> 
            : <MemberList members={this.state.members} 
          />}
         
        </div>;
    }
  }
  
  export default Members;
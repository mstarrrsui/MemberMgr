import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import LogProps from './LogProps';
import LogPropsHOC from './LogPropsHOC';
import MemberCardGrid from './MemberCardGrid';
import MemberForm from './MemberForm';
import MemberApi from '../api/mockMemberApi'
import log from 'loglevel';
import Modal from 'react-responsive-modal';

import { US_STATES } from '../data/states'

const LoggedComponent = LogProps(MemberCardGrid);

export default class MemberCardView extends React.Component {
   
  constructor() {
    super();
    this._isMounted=false;
  }

  state = {
    members: null,
    searchText: '',
    scrollId: 0,
    isAddDialogOpen: false,
  }
  
    componentDidMount() {
      this._isMounted = true;
      this.loadMembers();
    }
    
    componentWillUnmount() {
      this._isMounted = false;
    }

    handleLoadSuccess = (result) => {
      if (this._isMounted)
        this.setState( () => ({ members: result }) )
    }

    

    onAddNew = () => {
      this.setState( () => ({ isAddDialogOpen: true}) )  
    }

    
    onCloseModal = () => {
      this.setState( () => ({ isAddDialogOpen: false}) )  
    }

    onSubmit = ({firstName, lastName, address1, city, addrState, zipcode}) => {
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
      }).then(this.loadMembers())
        .then(this.setState( () => ({ isAddDialogOpen: false}) ));

    }

    onChangeHandler = (e) => {
        var value = e.target.value;
        this.setState( () => ({ searchText: value}) )    
    }

    onScroll = () => {
      log.info("onScroll called!");
      this.setState( () => ({ scrollId: 30}) )
    }

    loadMembers() {

      MemberApi.getAllMembers()
               .then( result => this.handleLoadSuccess(result) )
               .catch( error => { throw(error); })
    }

   

    render() {

      const {members, isAddDialogOpen, scrollId} = this.state;
      return (
          <div>           
            <div className="row">
                <div className="col-md-6 d-flex">
                    <div className="p-1"><h2>Member Cards</h2></div>
                    <div className="p-1">
                        <button type="submit" onClick={this.onAddNew} className="btn btn-primary">Add New</button>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <input className="form-control form-control-lg" type="text" 
                            onChange={this.onChangeHandler} placeholder="Search"/>
                </div>
            </div>
            
            <MemberCardGrid members={members}/>
            

            <Modal open={isAddDialogOpen} 
                    onClose={this.onCloseModal} 
                    closeOnOverlayClick={false}
                    little 
                    classNames={{ modal: 'custom-modal' }}>
                <h2>Add New Member</h2>
                <MemberForm onSubmit={this.onSubmit}/>
            </Modal>
         
        </div>
        );
    }
  }
  
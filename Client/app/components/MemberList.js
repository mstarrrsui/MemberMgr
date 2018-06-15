import React from 'react';
import PropTypes from 'prop-types';
import MemberListRow from './MemberListRow';

class MemberList extends React.Component { 

  static propTypes = {
    members: PropTypes.array.isRequired,
    scrollTo: PropTypes.number.isRequired
  }

  componentDidMount() {
    // const node = this.scrolledRow;  
    // node && node.scrollIntoView({block: "center", behavior: "instant"})  
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    const node = this.scrolledRow;  
    node && node.scrollIntoView({block: "center", behavior: "instant"})
  }
  
  render() {

    const {members, scrollTo} = this.props;

    return (
      <table className="table member-list">
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zipcode</th>
        </tr>
        </thead>
        <tbody>
        {members.map(member =>
          <MemberListRow 
            scrollTo={scrollTo} 
            scrollRowRef={el => this.scrolledRow = el} 
            key={member.id} 
            member={member} />
        )}
        </tbody>
      </table>
    );
  }
      
}



export default MemberList;

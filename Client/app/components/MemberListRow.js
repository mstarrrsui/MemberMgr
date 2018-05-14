import React from 'react';
import PropTypes from 'prop-types';


const MemberListRow = ({member, scrollTo, scrollRowRef}) =>  {
    
  return (
    <tr ref={e => { member.id === scrollTo ? scrollRowRef(e) : null}}>
      <td>&nbsp;</td>
      <td>{member.id}</td>
      <td>{member.MemberFirstName}</td>  
      <td>{member.MemberLastName}</td>
      <td>{member.MemberEmailAddress}</td>
      <td>{member.StreetAddress}</td>
      <td>{member.City}</td>
      <td>{member.State}</td>
      <td>{member.Zipcode}</td>
    </tr>
  );
}



MemberListRow.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberListRow;

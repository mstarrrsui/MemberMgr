import React from 'react';
import PropTypes from 'prop-types';


const MemberListRow = ({member}) => {
  return (
      <tr>
        <td>&nbsp;</td>
        <td>{member.MemberFirstName}</td>  
        <td>{member.MemberLastName}</td>
        <td>{member.MemberEmailAddress}</td>
        <td>{member.StreetAddress}</td>
      </tr>
  );
};

MemberListRow.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberListRow;

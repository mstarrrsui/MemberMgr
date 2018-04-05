import React from 'react';
import PropTypes from 'prop-types';
import MemberListRow from './MemberListRow';

const MemberList = ({members}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
      </thead>
      <tbody>
      {members.map(member =>
        <MemberListRow key={member.id} member={member}/>
      )}
      </tbody>
    </table>
  );
};

MemberList.propTypes = {
  members: PropTypes.array.isRequired
};

export default MemberList;
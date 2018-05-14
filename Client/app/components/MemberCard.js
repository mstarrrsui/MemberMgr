import React from 'react';
import PropTypes from 'prop-types';


const MemberCard = ({member}) =>  {
    
  return (
    <div className="well membercard col-md-3">
        <h4 className="membertitle">{member.MemberLastName + ', ' + member.MemberFirstName}</h4>
        <div className="memberaddress">{member.StreetAddress}</div>
    </div>
  );
}



MemberCard.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberCard;

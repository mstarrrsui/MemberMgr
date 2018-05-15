import React from 'react';
import PropTypes from 'prop-types';


const MemberCard = ({member}) =>  {
    
  return (
    <div className="well membercard col-md-3">
        <h4 className="membertitle">{member.MemberLastName + ', ' + member.MemberFirstName}</h4>
        <div className="memberaddress"><strong>{member.StreetAddress}</strong></div>
        <div className="memberaddress"><strong>{member.City + ', ' + member.State + ' ' + member.Zipcode}</strong></div>
        <div>{member.MemberEmailAddress}</div>
        <div>Phone: {member.MemberCellPhone}</div>
        {member.SpouseLastName ? 
            <div>Spouse: {member.SpouseLastName + ', ' + member.SpouseFirstName}</div>
            :
            <div></div>
        }
    </div>
  );
}



MemberCard.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberCard;

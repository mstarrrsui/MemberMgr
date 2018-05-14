import React from 'react';
import PropTypes from 'prop-types';
import MemberCard from './MemberCard';
import Spinner from './Spinner';
 



const MemberCardGrid = ({members}) =>  {
  

    return (
         !members 
            ? <Spinner/>
            : <div className="membercards row">
                { members.map(member =>
                    <MemberCard 
                    key={member.id} 
                    member={member} />
                )}
             </div>
     
    )
  
}



MemberCardGrid.propTypes = {
  members: PropTypes.array.isRequired
};

export default MemberCardGrid;

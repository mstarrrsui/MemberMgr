import delay from './delay';
import members from '../data/members.json'



const MemberApi = {

  memberData: [],

  getAllMembers: function() {

    if (this.memberData.length < 1) 
      this.memberData = members.map( (m, idx) => ({ id: idx, ...m}) );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], this.memberData.slice(0,500)));
      }, delay);
    });
  },

  addMember: function(newmember) {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let newmemberwithid = ({id: this.memberData.length, ...newmember});
        this.memberData.push(newmemberwithid);
        resolve(Object.assign({}, newmemberwithid));
      }, delay);
    });
  }

  
}

export default MemberApi;

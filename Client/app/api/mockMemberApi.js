import delay from './delay';
import members from '../data/members.json'

class MemberApi {
  static getAllMembers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let memberswithids = members.map( (m, idx) => ({ id: idx, ...m}) )
        resolve(Object.assign([], memberswithids));
      }, delay);
    });
  }

  
}

export default MemberApi;

import React from 'react';
import PropTypes from 'prop-types';
import log from 'loglevel';
import Modal from 'react-responsive-modal';


class MemberForm extends React.Component {
    constructor(props, context) {
      super(props, context);
    }
  
    componentDidMount() {
    }


    render() {
      return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div> 
            </form>
        </div>
      );
    }
  }

  MemberForm.propTypes = {
    members: PropTypes.array.isRequired
  };
  
  export default MemberForm;
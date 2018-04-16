import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { US_STATES } from '../data/states'

const MemberForm = ({onSubmit}) => {
    //change
    function handleSubmit(e) {
      e.preventDefault();
      onSubmit();
    }

    return (
      <div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputFirstName">First Name</label>
                <input type="text" className="form-control"  id="inputFirstName" placeholder="First Name" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputLastName">Last Name</label>
                <input type="text" className="form-control" id="inputLastName" autoComplete='family-name' placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" autoComplete='address-line-1' placeholder="Address" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" placeholder="City" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control" defaultValue="">
                  <option value="" disabled>Choose...</option>
                  {
                    US_STATES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)
                  }
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip"/>
              </div>
              
            </div>
            <div className="row">
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary float-right">Add</button>
              </div>
            </div>
          </form>
        </div>
    );
};

MemberForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default MemberForm;

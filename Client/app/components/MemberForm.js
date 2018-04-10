import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { US_STATES } from '../data/states'

const MemberForm = () => {
    return (
      <div>
          <form>
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
          </form>
        </div>
    );
};

MemberForm.propTypes = {
};

export default MemberForm;

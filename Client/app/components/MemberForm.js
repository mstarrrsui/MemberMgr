import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { US_STATES } from '../data/states'

class MemberForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleInputChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(() => ({[name]: value}));
  }


  render() {

    return (
      <div className="row">
        <div className="col-md-9">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputFirstName">First Name</label>
                  <input type="text" className="form-control"  id="inputFirstName" name="firstName" placeholder="First Name" 
                  onChange={this.handleInputChange}/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputLastName">Last Name</label>
                  <input type="text" className="form-control" id="inputLastName" autoComplete='family-name' name="lastName" placeholder="Last Name"
                  onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input type="text" className="form-control" id="inputAddress" name="address1" autoComplete='address-line-1' placeholder="Address" 
                  onChange={this.handleInputChange}/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" name="city" placeholder="City" 
                  onChange={this.handleInputChange} />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <select id="inputState" name="addrState" className="form-control" defaultValue="" onChange={this.handleInputChange}>
                    <option value="" disabled>Choose...</option>
                    {
                      US_STATES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)
                    }
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" name="zipcode" onChange={this.handleInputChange}/>
                </div>
                
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary float-right">Add</button>
                </div>
              </div>
            </form>
        </div>
        <div className="col-md-3">
          <div><pre>{JSON.stringify(this.state, null, 4)}</pre></div>
        </div>

      </div>
    );
  }
    
}

MemberForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default MemberForm;

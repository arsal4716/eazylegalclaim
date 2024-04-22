import React, { useState, useEffect } from 'react';
import '../styles/form.css';
import img from '../../assets/heroBack.webp'
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phoneNo: '',
    email: '',
    city: '',
    state: '',
    address: '',
    zipCode: '',
    dob: '',
    terms: false,
    leadid_token: '',
    incident_date: '',
    injury_occurred: false,
    at_fault: false,
    currently_represented: false,
    needs_attorney: '',
    person_at_fault: false,
    hospitalized_or_treated: false,
    area_of_practice: '',
    currently_insured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'LeadiDscript_campaign';
    script.type = 'text/javascript';
    script.async = true;
    script.src =
      '//create.lidstatic.com/campaign/371b0c15-99da-f776-20d8-55d1b555ea9a.js?snippet_version=2';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const leadidToken = document.getElementById('leadid_token').value;
      console.log("lead token", leadidToken)
    
      const response = await axios.post('http://localhost:3001/submit', {
        ...formData,
        leadid_token: leadidToken,
      });
      console.log('Form submitted successfully:', response.data);
      
      // Reset form state
      setFormData({
        fname: '',
        lname: '',
        phoneNo: '',
        email: '',
        city: '',
        state: '',
        address: '',
        zipCode: '',
        dob: '',
        terms: false,
        leadid_token: '', // Reset leadid_token
        incident_date: '',
        injury_occurred: false,
        at_fault: false,
        currently_represented: false,
        needs_attorney: '',
        person_at_fault: false,
        hospitalized_or_treated: false,
        area_of_practice: '',
        currently_insured: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Error details:', error.response);
    }
  };
  
  return (
    <div className="container" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <div className="left-side">
        <h2>Drive Worry-Free: Your Ultimate Coverage for Motor Vehicle Accidents</h2>
        <p className='policy'>
        Manage Your Policy Anytime, Anywhere, with No Hassles
        </p>
      </div>
      <div className="right-side">
        <div className="form-area">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNo">Phone NO</label>
                <input type="text" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email ID:</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="zipCode">Zip Code:</label>
                <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="dob">DOB</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="incident_date">Incident Date</label>
              <select id="incident_date" name="incident_date" value={formData.incident_date} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Within 1 Year">Within 1 Year</option>
              <option value="Within 2 Year">Within 2 Year</option>
              <option value="Within 3 Year">Within 3 Year</option>
              <option value="Within 4 Year">Within 4 Year</option>
              <option value="Within 5 Year">Within 5 Year</option>
              <option value="Within 6 Year">Within 6 Year</option>
             </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="injury_occurred">Injury Occurred</label>
                <input
                  type="checkbox"
                  id="injury_occurred"
                  name="injury_occurred"
                  checked={formData.injury_occurred}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="at_fault">At Fault</label>
                <input
                  type="checkbox"
                  id="at_fault"
                  name="at_fault"
                  checked={formData.at_fault}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="currently_represented">Currently Represented</label>
                <input
                  type="checkbox"
                  id="currently_represented"
                  name="currently_represented"
                  checked={formData.currently_represented}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="needs_attorney">Needs Attorney</label>
                <input
                  type="checkbox"
                  id="needs_attorney"
                  name="needs_attorney"
                  value={formData.needs_attorney}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="person_at_fault">Person at Fault</label>
                <input
                  type="checkbox"
                  id="person_at_fault"
                  name="person_at_fault"
                  checked={formData.person_at_fault}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hospitalized_or_treated">Hospitalized/Treated</label>
                <input
                  type="checkbox"
                  id="hospitalized_or_treated"
                  name="hospitalized_or_treated"
                  checked={formData.hospitalized_or_treated}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="area_of_practice">Area of Practice</label>
              <input
                type="checkbox"
                id="area_of_practice"
                name="area_of_practice"
                value={formData.area_of_practice}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="currently_insured">Currently Insured</label>
              <input
                type="checkbox"
                id="currently_insured"
                name="currently_insured"
                checked={formData.currently_insured}
                onChange={handleChange}
              />
            </div>

            <input id="leadid_token" name="universal_leadid" type="hidden" value={formData.leadid_token}  />
            <button className='sub-btn' type="submit">Submit</button>
          </form>
          <p>We promise your details are secure with us.</p>
        </div>
      </div>
    </div>
  );
};

export default Form;

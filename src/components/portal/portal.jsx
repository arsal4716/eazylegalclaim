import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/table.css';

const PortalPage = () => {
  const [data, setData] = useState([]);
  const [businessNumber, setBusinessNumber] = useState({});
  const [publisherPayout, setPublisherPayout] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/portal');
      setData(response.data);
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleTrackDriveClick = async (leadId) => {
    try {
      console.log('Lead ID token:', leadId);
      const fetchDataResponse = await axios.get('/portal');
      const newData = fetchDataResponse.data;

      console.log('New Data:', newData);
      const leadData = newData.find(item => item._id === leadId);
      console.log('Lead Data:', leadData);

      if (!leadData) {
          console.error('Lead data not found for lead ID:', leadId);
          return;
      }
        const requestData = {
            lead_token: leadData.lead_token,
            caller_id: leadData.phoneNo,
            traffic_source_id: '11901',
            first_name: leadData.fname,
            last_name: leadData.lname,
            email: leadData.email,
            zip: leadData.zipCode,
            source_url: leadData.source_url,
            incident_date: leadData.incident_date,
            currently_represented: leadData.currently_represented,
            needs_attorney: leadData.needs_attorney,
            person_at_fault: leadData.person_at_fault,
            hospitalized_or_treated: leadData.hospitalized_or_treated,
            currently_insured: leadData.currently_insured,
            injury_occurred: leadData.injury_occurred,
            at_fault: leadData.at_fault,
        };

        console.log('Request Data:', requestData);
        const trackDriveResponse = await axios.post('/api/track-drive', requestData);
        console.log('Response:', trackDriveResponse);

        if (trackDriveResponse.status === 200) {
            console.log('Data successfully sent to Track Drive');
        } else {
            console.log('Failed to send data to Track Drive');
        }
    } catch (error) {
        console.error('Error sending data to Track Drive:', error);
    }
};
const handleRTBClick = async (leadidToken) => {
  try {
    const leadData = data.find(item => item._id['$oid'] === leadidToken);
    if (!leadData) {
      console.error('Lead data not found for lead ID:', leadidToken);
      return;
    }
    const partnerId = "zu0fcp4k";
    const searchType = "keyword";
    const searchTerm = "MVA Attorneys";
    const zip = leadData.zipCode;
    const url = `https://services.archenia.io/mcm/listings?partnerId=${partnerId}&searchType=${searchType}&searchTerm=${searchTerm}&zip=${zip}`;
    const response = await fetch(url);
    if (response.ok) {
      const responseData = await response.json();
      console.log("API response:", responseData);
      responseData.forEach(item => {
        console.log("businessNumber:", item.businessNumber);
        console.log("publisherPayout:", item.publisherPayout);
        setBusinessNumber(prevState => ({
          ...prevState,
          [leadidToken]: item.businessNumber
        }));
        setPublisherPayout(prevState => ({
          ...prevState,
          [leadidToken]: item.publisherPayout
        }));
      });
    } else {
      console.error("Failed to fetch data:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>F Name</th>
            <th>L Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
            <th>Address</th>
            <th>Zip Code</th>
            <th>DOB</th>
            <th>Lead Id</th>
            <th>Ip Address</th>
            <th>DID</th>
            <th>Price</th>
            <th>D1</th>
            <th>D2</th>
            <th>D3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
              <tr key={item._id['$oid']}>              
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.phoneNo}</td>
              <td>{item.email}</td>
              <td>{item.city}</td> 
              <td>{item.state}</td>
              <td>{item.address}</td>
              <td>{item.zipCode}</td>
              <td>{item.dob}</td>
              <td>{item.leadid_token}</td>
              <td>{item.ip_address}</td>
              <td>{businessNumber[item._id['$oid']]}</td>
              <td>{publisherPayout[item._id['$oid']]}</td>
              <td>
  <button className="button-link" onClick={() => handleTrackDriveClick(item._id)}>D1</button>
</td>

              <td>
              <button className="button-link" onClick={() => handleRTBClick(item._id['$oid'])}>D2</button>
              </td>
              <td>
                <button className="button-link">D3</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortalPage;

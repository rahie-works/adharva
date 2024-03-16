import React, { useState, useEffect } from "react";
import "./Register.css";
import { createClient } from "contentful";
import {
  SERVICE_CARDS_DATA,
  SERVICES_QUALIFICATIONS,
} from "../services/ServicesConstant";
import styled from "styled-components";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const StyledForm = styled.form`
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledLabel = styled.label`
  display: block;
  margin: 3vmin 0px;
  font-size: 1.5vmin;
  color: white;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 30px;
`;
const StyledButton = styled.button`
  display: flex;
  background-color: #7f7f7f;
  width: auto;
  padding: 10px;
  margin: 30px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2vmax;
  color: white;
  justify-content: center;
`;

// const resend = new Resend("re_A3zxSR2u_MhB7hmb6pnT4KUCMBs6rR43M");

export default function Register() {
  const [serviceList, setServiceList] = useState([]);
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [clientDataReceiver, setClientDataReceiver] = useState({});
  const smtpjs = window.Email;

  const submitClicked = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fecthData = async () => {
      try {
        const servicesSectionData = await client.getEntry(
          "4OKb4mEv1upnVGbo5fxkEb"
        );
        setServiceList(servicesSectionData?.fields?.servicesList?.services);
        setClientDataReceiver(servicesSectionData.fields.clientDataReceiver);
      } catch (error) {
        console.log("==Data not received", error);
        setServiceList(SERVICE_CARDS_DATA);
      }
    };
    fecthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flexbox-grid-column">
      <div className="register_container">
        <h1 className="registration_title">Register</h1>
        <h5 className="course_selection_label">
          Select your preferred course:{" "}
        </h5>
        <div className="service_list flexbox-grid-row">
          {serviceList?.map((eachService, index) => {
            return (
              <div className="service_list_item">
                <h3>{eachService.serviceName}</h3>
                <h5>{eachService.serviceAbbr}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div className="registration_form">
        <StyledForm onSubmit={submitClicked}>
          <StyledInput
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PhoneInput
            inputClassName="phone-number-field"
            defaultCountry="in"
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone)}
          />
          <StyledLabel>Select your highest qualification: </StyledLabel>
          <div className="select_qualifications flexbox-grid-row">
            {SERVICES_QUALIFICATIONS.map((eachQualification, index) => {
              return (
                <div key={index} className="select_qualifications_item">
                  {eachQualification}
                </div>
              );
            })}
          </div>
          <StyledButton type="submit" disabled={false}>
            Register
          </StyledButton>
        </StyledForm>
      </div>
    </div>
  );
}

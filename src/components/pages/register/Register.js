import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import styled from "styled-components";
import { PhoneInput } from "react-international-phone";
import emailjs from "@emailjs/browser";

import {
  SERVICE_CARDS_DATA,
  SERVICES_QUALIFICATIONS,
} from "../services/ServicesConstant";

import "react-international-phone/style.css";
import "./Register.css";

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
const StyledCheckBox = styled.label`
  display: block;
  margin: 1vmin 0px;
  font-size: 1.3vmin;
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
  background-color: ${({ colorchange }) => (!colorchange ? "blue" : "gray")};
  width: auto;
  padding: 10px;
  margin: 30px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2vmax;
  color: white;
  justify-content: center;
`;

const CONSENT_TEXT = `I provide my consent to contact
me through email/phone from Adharva
Institute of Commerce.`;

export default function Register() {
  const [serviceList, setServiceList] = useState([]);
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [courseSelected, setCourseSelected] = useState("");
  const [qualificationSelected, setQualificationSelected] = useState("");
  const [clickedCourseId, setClickedCourseId] = useState("");
  const [clickedQualificationId, setClickedQualificationId] = useState("");
  const [checked, setChecked] = useState(false);
  const [clientDataReceiver, setClientDataReceiver] = useState({});

  const submitClicked = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert(
        "All fields are required. Please provide a phone number for contact purposes."
      );
      return;
    }
    if (!courseSelected) {
      alert("All fields are required. Please select a course from the list.");
      return;
    }
    if (!qualificationSelected) {
      alert(
        "All fields are required. Please select your highest qualification from the list."
      );
      return;
    }
    if (!checked) {
      alert(
        "Your consent for using the registration data is important. Please accept by checking the checkbox"
      );
      return;
    }
    const { serviceId, templateId, publicKey } = clientDataReceiver;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Adharva Admin",
      from_phone: phoneNumber,
      from_qualification: qualificationSelected,
      from_course: courseSelected,
      message: `I am interested in registering for ${courseSelected}. Please find the details and connect with me. Thank you`,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS...", response);
        alert(`Thanks for enquiring ${name}. We will contact you soon`);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setChecked(false);
        setClickedCourseId("");
        setClickedQualificationId("");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  const onSelectedCourse = (serviceName, id) => {
    setCourseSelected(serviceName);
    setClickedCourseId(id);
  };

  const onSelectedQualification = (qualification, id) => {
    setQualificationSelected(qualification);
    setClickedQualificationId(id);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
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
          Select your preferred course:
        </h5>
        <div className="service_list flexbox-grid-row">
          {serviceList?.map((eachService, index) => {
            return (
              <div
                className={
                  clickedCourseId !== index
                    ? "service_list_item"
                    : "service_list_item selected_item"
                }
                key={index}
                onClick={() => onSelectedCourse(eachService.serviceName, index)}
              >
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
            required
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            required
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PhoneInput
            required
            inputClassName="phone-number-field"
            defaultCountry="in"
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone)}
          />
          <StyledLabel>Select your highest qualification: </StyledLabel>
          <div className="select_qualifications flexbox-grid-row">
            {SERVICES_QUALIFICATIONS.map((eachQualification, index) => {
              return (
                <div
                  key={index}
                  className={
                    clickedQualificationId === index
                      ? "select_qualifications_item selected_item"
                      : "select_qualifications_item"
                  }
                  onClick={() =>
                    onSelectedQualification(eachQualification, index)
                  }
                >
                  {eachQualification}
                </div>
              );
            })}
          </div>
          <StyledCheckBox>
            <input
              type="checkbox"
              style={{ marginRight: "1vh", paddingTop: "1vh" }}
              checked={checked}
              onChange={handleCheckboxChange}
            />
            {CONSENT_TEXT}
          </StyledCheckBox>
          <StyledButton
            type="submit"
            colorchange={
              !name ||
              !email ||
              !phoneNumber ||
              !qualificationSelected ||
              !courseSelected ||
              !checked
            }
          >
            Register
          </StyledButton>
        </StyledForm>
      </div>
    </div>
  );
}

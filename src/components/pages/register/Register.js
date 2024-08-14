import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import styled, { keyframes } from "styled-components";
import { PhoneInput } from "react-international-phone";
import emailjs from "@emailjs/browser";
import CourseSelectionScreen from "./CourseSelectionScreen";
import { fadeIn } from "react-animations";

import {
  SERVICE_CARDS_DATA,
  SERVICES_QUALIFICATIONS,
} from "../services/ServicesConstant";
import CourseDescription from "./CourseDescription";

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
  font-size: 1.6vmin;
  color: white;
`;
const StyledCheckBox = styled.label`
  display: block;
  margin: 1vmin 0px;
  font-size: 1.6vmin;
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

const simpleAnimation = keyframes`${fadeIn}`;

const StyledRegistrationForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 10px;
  gap: 3vw;
  justify-content: center;
  align-items: center;
  animation: 2.5s ${simpleAnimation};
`;

const CONSENT_TEXT = `I provide my consent to contact
me through email/phone from Adharva
Institute of Commerce.`;

export default function Register(props) {
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
  const [showCourseSelection, setShowCourseSelection] = useState(false);

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
      from_course: courseSelected.serviceName,
      message: `I am interested in registering for ${courseSelected.serviceName}. Please find the details and connect with me. Thank you`,
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
        if (props.course) {
          const selectedCourse =
            servicesSectionData?.fields?.servicesList?.services.find(
              (eachService, index) => eachService.serviceAbbr === props.course
            );
          onSelectedCourse(
            selectedCourse,
            servicesSectionData?.fields?.servicesList?.services.indexOf(
              selectedCourse
            )
          );
          setShowCourseSelection(false);
        } else {
          setShowCourseSelection(true);
        }
      } catch (error) {
        console.log("==Data not received", error);
        setServiceList(SERVICE_CARDS_DATA);
        setShowCourseSelection(true);
      }
    };
    fecthData();
  }, []);

  return (
    <StyledRegistrationForm>
      {showCourseSelection && (
        <CourseSelectionScreen
          clickedCourseId={clickedCourseId}
          serviceList={serviceList}
          onSelectedCourse={onSelectedCourse}
        />
      )}
      <CourseDescription course={courseSelected} />
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
    </StyledRegistrationForm>
  );
}

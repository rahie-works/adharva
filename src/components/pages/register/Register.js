import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { PhoneInput } from "react-international-phone";
import emailjs from "@emailjs/browser";

// components
import CourseSelectionScreen from "./CourseSelectionScreen";
import { CourseDescription } from "./CourseDescription";

// constants
import {
  SERVICE_CARDS_DATA,
  SERVICES_QUALIFICATIONS,
} from "../services/ServicesConstant";

// style
import "react-international-phone/style.css";
import "./Register.css";

// styled
import * as S from "./RegisterFormStyledComponents"

const CONSENT_TEXT = `I provide my consent to contact
me through email/phone from Adharva
Institute of Commerce.`;

export const Register = (props) => {
  const [serviceList, setServiceList] = useState([]);
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [courseSelected, setCourseSelected] = useState("");
  const [imageList, setImageList] = useState([]);
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
        setImageList(servicesSectionData?.fields?.servicesTileImages);
        setServiceList(servicesSectionData?.fields?.servicesList?.services);
        setClientDataReceiver(servicesSectionData.fields.clientDataReceiver);
        if (props.course) {
          const selectedCourse =
            servicesSectionData?.fields?.servicesList?.services.find(
              (eachService) => eachService.serviceAbbr === props.course
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
    <S.StyledRegistrationForm>
      {showCourseSelection && (
        <CourseSelectionScreen
          clickedCourseId={clickedCourseId}
          serviceList={serviceList}
          onSelectedCourse={onSelectedCourse}
        />
      )}
      <CourseDescription course={courseSelected} images={imageList}/>
      <div className="flexbox-grid-row">
        <S.StyledCheckBox>
          <input
            type="checkbox"
            style={{ marginRight: "1vh", paddingTop: "1vh" }}
            checked={true}
            // onChange={handleCheckboxChange}
          />
          Offline
        </S.StyledCheckBox>
        <S.StyledDisabledCheckBox>
          <input
            type="checkbox"
            style={{ marginRight: "1vh", paddingTop: "1vh" }}
            checked={false}
            disabled={true}
            // onChange={handleCheckboxChange}
          />
          Online (Coming Soon)
        </S.StyledDisabledCheckBox>
      </div>
      <div className="registration_form">
        <S.StyledForm onSubmit={submitClicked}>
          <S.StyledInput
            required
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <S.StyledInput
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
          <S.StyledLabel>Select your highest qualification: </S.StyledLabel>
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
          <S.StyledCheckBox>
            <input
              type="checkbox"
              style={{ marginRight: "1vh", paddingTop: "1vh" }}
              checked={checked}
              onChange={handleCheckboxChange}
            />
            {CONSENT_TEXT}
          </S.StyledCheckBox>
          <S.StyledButton
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
          </S.StyledButton>
        </S.StyledForm>
      </div>
    </S.StyledRegistrationForm>
  );
}

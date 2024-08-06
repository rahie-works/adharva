import React from "react";
import "./Register.css";
import "./CourseDescription.css";

function DefaultScreen() {
  return (
    <div className="register_container">
      <h1 className="registration_title">Learn More</h1>
      <h5 className="course_selection_label">Select your preferred course.!</h5>
    </div>
  );
}

function CPADescriptionScreen(props) {
  return (
    <div className="register_container">
      <h1>{props.course.serviceName}</h1>
      <div className="intro_body_container">
        <h5 className="course_description_body">
          {props.course.description?.intro}
        </h5>
        <h5 className="course_description_body">
          {props.course.description?.body}
        </h5>
      </div>
      <div className="intro_body_container">
        <div>
          <h2 className="course_description_heading">{"Job Opptortunities"}</h2>
          <h5 className="course_description_body">
            {props.course.description?.extras?.["Job Opptortunities"]}
          </h5>
        </div>
        <div>
          <h2 className="course_description_heading">{"Optional Modules"}</h2>
          <h5 className="course_description_body">
            {props.course.description?.extras?.["Optional Modules"]}
          </h5>
        </div>
      </div>
      <div className="cpa_extra_body_container">
        <div className="cpa_extra_body_item cpa_extra_body_description">
          <h5 className="cpa_extra_body_description">{"Duration :"}</h5>
          <h5 className="cpa_extra_body_description">
            {props.course?.duration}
          </h5>
        </div>
        <div className="cpa_extra_body_item">
          <h5 className="cpa_extra_body_description">{"Eligibility : "}</h5>
          <h5 className="cpa_extra_body_description">
            {props.course?.eligibility}
          </h5>
        </div>
      </div>
    </div>
  );
}

function CGPDescriptionScreen(props) {
  const objectives = props.course.description.extras;
  return (
    <div className="register_container">
      <h1 className="registration_title">{props.course.serviceName}</h1>
      <div className="intro_body_container">
        <h5 className="course_description_body">
          {props.course.description?.intro}
        </h5>
        <h5 className="course_description_body">
          {props.course.description?.body}
        </h5>
      </div>
      <div className="cgp_extra_body_container">
        <h5 className="course_description_heading">
          {"Objectives of the Practical Training"}
        </h5>
        <ol>
          {objectives &&
            objectives?.map((eachExtra, index) => {
              return (
                <li key={index} className="cgp_extra_body_description">
                  {eachExtra}
                </li>
              );
            })}
        </ol>
      </div>
      <div className="cgp_extra_body_container">
        <div className="cgp_extra_body_item cgp_extra_body_description">
          <h5 className="cgp_extra_body_description">{"Duration :"}</h5>
          <h5 className="cgp_extra_body_description">
            {props.course?.duration}
          </h5>
        </div>
        <div className="cgp_extra_body_item">
          <h5 className="cgp_extra_body_description">{"Eligibility : "}</h5>
          <h5 className="cgp_extra_body_description">
            {props.course?.eligibility}
          </h5>
        </div>
      </div>
    </div>
  );
}

function CATDescriptionScreen(props) {
  return (
    <div className="register_container">
      <h1 className="registration_title">{props.course.serviceName}</h1>
      <div className="intro_body_container">
        <h5 className="course_description_body">
          {props.course.description?.intro}
        </h5>
      </div>
      <div className="cat_extra_body_container">
        <h5 className="course_description_heading">
          {"This course consists of 3 Stages :"}
        </h5>
        <ol>
          {props.course.courseStructure &&
            props.course.courseStructure?.map((eachExtra, index) => {
              return (
                <li key={index} className="cat_extra_body_bullets">
                  {eachExtra}
                  <ul>
                    {props.course.description?.extras[index].map(
                      (eachTopic, index) => {
                        return (
                          <li
                            key={index}
                            className="cat_extra_body_description"
                          >
                            {eachTopic}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </li>
              );
            })}
        </ol>
      </div>
      <div className="cat_extra_body_container">
        <div className="cat_extra_body_item">
          <h5 className="cat_extra_body_description">{"Eligibility : "}</h5>
          <h5 className="cat_extra_body_description">
            {props.course?.eligibility}
          </h5>
        </div>
      </div>
    </div>
  );
}

function GSTDescriptionScreen(props) {
  return (
    <div className="register_container">
      <h1 className="registration_title">{props.course.serviceName}</h1>
      <div className="intro_body_container">
        <h5 className="course_description_body">
          {props.course.description?.intro}
        </h5>
      </div>
      <div className="gst_extra_body_container">
        <h5 className="course_description_heading">{"Requirement :"}</h5>
        <h5 className="course_description_body">{props.course.requirements}</h5>
      </div>
      <div className="gst_extra_body_container">
        <h5 className="course_description_heading">{"Certified By :"}</h5>
        <h5 className="course_description_body">
          {props.course.certificationBody}
        </h5>
      </div>
      <div className="gst_extra_body_container">
        <div className="gst_extra_body_item extra_body_description">
          <h5 className="gst_extra_body_description">{"Duration :"}</h5>
          <h5 className="gst_extra_body_description">
            {props.course?.duration}
          </h5>
        </div>
        <div className="gst_extra_body_item">
          <h5 className="gst_extra_body_description">{"Eligibility : "}</h5>
          <h5 className="gst_extra_body_description">
            {props.course?.eligibility}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default function CourseDescription(props) {
  const [courseDetails, setCourseDetails] = React.useState(props.course);

  const targetCourse = (courseName) => {
    switch (courseName) {
      case "CPA":
        return <CPADescriptionScreen course={courseDetails} />;
      case "CGP":
        return <CGPDescriptionScreen course={courseDetails} />;
      case "CAT":
        return <CATDescriptionScreen course={courseDetails} />;
      case "GST":
        return <GSTDescriptionScreen course={courseDetails} />;
      default:
        return <DefaultScreen />;
    }
  };

  React.useEffect(() => {
    setCourseDetails(props.course);
  }, [props.course]);

  return (
    <div className="flexbox-grid-column">
      {targetCourse(courseDetails?.serviceAbbr)}
    </div>
  );
}

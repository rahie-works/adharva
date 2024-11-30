import React from "react";
import "./Register.css";
import "./CourseDescription.css";

import * as S from "./CourseDescriptionStyledComponent"

const DefaultScreen = () => {
  return (
    <div className="register_container">
      <h1 className="registration_title">Learn More</h1>
      <h5 className="course_selection_label">Select your preferred course.!</h5>
    </div>
  );
}

const CPADescriptionScreen = (props) => {
  return (
    <S.StyledCourseSelectionScreen>
      <S.StyledImage alt="test" src={props.image}/>
      <S.BodyContainer>
        <S.IntroBodyContainer>
          <S.CPAStickyTitle>{props.course.serviceName}</S.CPAStickyTitle>
          <S.CourseDescriptionBody>
            {props.course.description?.intro}
          </S.CourseDescriptionBody>
          <S.CourseDescriptionBody>
            {props.course.description?.body}
          </S.CourseDescriptionBody>
        </S.IntroBodyContainer>
        <S.IntroBodyContainer>
          <S.CourseDescriptionHeading>{"Job Opptortunities"}</S.CourseDescriptionHeading>
          <S.CourseDescriptionBody>
            {props.course.description?.extras?.["Job Opptortunities"]}
          </S.CourseDescriptionBody>
          <S.CourseDescriptionHeading>{"Optional Modules"}</S.CourseDescriptionHeading>
          <S.CourseDescriptionBody>
            {props.course.description?.extras?.["Optional Modules"]}
          </S.CourseDescriptionBody>
        </S.IntroBodyContainer>
        <S.CPAExtraBodyContainer>
          <S.CPAExtraBodyItem>
            <S.CPAExtraBodyDescription>{"Duration :"}</S.CPAExtraBodyDescription>
            <S.CPAExtraBodyDescription>
              {props.course?.duration}
            </S.CPAExtraBodyDescription>
          </S.CPAExtraBodyItem>
          <S.CPAExtraBodyItem>
            <S.CPAExtraBodyDescription>{"Eligibility : "}</S.CPAExtraBodyDescription>
            <S.CPAExtraBodyDescription>
              {props.course?.eligibility}
            </S.CPAExtraBodyDescription>
          </S.CPAExtraBodyItem>
        </S.CPAExtraBodyContainer>
      </S.BodyContainer>
    </S.StyledCourseSelectionScreen>
  );
}

const CGPDescriptionScreen = (props) => {
  const objectives = props.course.description.extras;
  return (
    <S.StyledCourseSelectionScreen>
      <S.StyledImage alt="test" src={props.image}/>
      <S.BodyContainer>
        <S.CPAStickyTitle>{props.course.serviceName}</S.CPAStickyTitle>
        <S.IntroBodyContainer>
          <S.CourseDescriptionBody>
            {props.course.description?.intro}
          </S.CourseDescriptionBody>
          <S.CourseDescriptionBody>
            {props.course.description?.body}
          </S.CourseDescriptionBody>
        </S.IntroBodyContainer>
        <S.CGPExtraBodyContainer>
          <S.CourseDescriptionHeading>
            {"Objectives of the Practical Training"}
          </S.CourseDescriptionHeading>
          <S.CGPExtraBodyList>
            {objectives &&
              objectives?.map((eachExtra, index) => {
                return (
                  <S.CGPExtraBodyDescription key={index}>
                    {eachExtra}
                  </S.CGPExtraBodyDescription>
                );
              })}
          </S.CGPExtraBodyList>
        </S.CGPExtraBodyContainer>
        <S.CGPExtraBodyContainer>
          <S.CPAExtraBodyItem>
            <S.CGPExtraBodyData>{"Duration :"}</S.CGPExtraBodyData>
            <S.CGPExtraBodyData>{props.course?.duration}</S.CGPExtraBodyData>
          </S.CPAExtraBodyItem>
          <S.CPAExtraBodyItem>
            <S.CGPExtraBodyData>{"Eligibility : "}</S.CGPExtraBodyData>
            <S.CGPExtraBodyData>{props.course?.eligibility}</S.CGPExtraBodyData>
          </S.CPAExtraBodyItem>
        </S.CGPExtraBodyContainer>
      </S.BodyContainer>
    </S.StyledCourseSelectionScreen>
  );
}

const CATDescriptionScreen= (props) => {
  return (
    <S.StyledCourseSelectionScreen>
      <S.StyledImage alt="test" src={props.image}/>
      <S.BodyContainer>
        <S.CPAStickyTitle>{props.course.serviceName}</S.CPAStickyTitle>
        <S.IntroBodyContainer>
          <S.CourseDescriptionBody>
            {props.course.description?.intro}
          </S.CourseDescriptionBody>
        </S.IntroBodyContainer>
        <S.CPAExtraBodyContainer>
          <S.CourseDescriptionHeading>
            {"This course consists of 3 Stages :"}
          </S.CourseDescriptionHeading>
          <ol>
            {props.course.courseStructure &&
              props.course.courseStructure?.map((eachExtra, index) => {
                return (
                  <S.CATExtraBodyBullets key={index}>
                    {eachExtra}
                    <ul>
                      {props.course.description?.extras[index].map(
                        (eachTopic, index) => {
                          return (
                            <S.CATExtraBodyDescription
                              key={index}
                              className="cat_extra_body_description"
                            >
                              {eachTopic}
                            </S.CATExtraBodyDescription>
                          );
                        }
                      )}
                    </ul>
                  </S.CATExtraBodyBullets>
                );
              })}
          </ol>
        </S.CPAExtraBodyContainer>
        <S.CPAExtraBodyContainer>
          <S.CPAExtraBodyItem>
            <S.CPAExtraBodyDescription>{"Eligibility : "}</S.CPAExtraBodyDescription>
            <S.CPAExtraBodyDescription>
              {props.course?.eligibility}
            </S.CPAExtraBodyDescription>
          </S.CPAExtraBodyItem>
        </S.CPAExtraBodyContainer>
      </S.BodyContainer>
    </S.StyledCourseSelectionScreen>
  );
}

const GSTDescriptionScreen = (props) => {
  return (
    <S.StyledCourseSelectionScreen>
      <S.StyledImage alt="test" src={props.image}/>
      <S.BodyContainer>
      <S.CPAStickyTitle>{props.course.serviceName}</S.CPAStickyTitle>
        <S.IntroBodyContainer>
          <S.CourseDescriptionBody>
            {props.course.description?.intro}
          </S.CourseDescriptionBody>
        </S.IntroBodyContainer>
        <S.CPAExtraBodyContainer>
          <S.CourseDescriptionHeading>{"Requirement :"}</S.CourseDescriptionHeading>
          <S.CourseDescriptionBody>{props.course.requirements}</S.CourseDescriptionBody>
        </S.CPAExtraBodyContainer>
        <S.CPAExtraBodyContainer>
          <S.CourseDescriptionHeading>{"Certified By :"}</S.CourseDescriptionHeading>
          <S.CourseDescriptionBody>
            {props.course.certificationBody}
          </S.CourseDescriptionBody>
        </S.CPAExtraBodyContainer>
        <S.CPAExtraBodyContainer>
          <S.CPAExtraBodyItem>
            <S.CPAExtraBodyDescription>{"Duration :"}</S.CPAExtraBodyDescription>
            <S.CPAExtraBodyItem>
              {props.course?.duration}
            </S.CPAExtraBodyItem>
          </S.CPAExtraBodyItem>
          <S.CPAExtraBodyItem>
            <S.CPAExtraBodyDescription>{"Eligibility"}</S.CPAExtraBodyDescription>
            <S.CPAExtraBodyDescription>
              {` : ${props.course?.eligibility}`}
            </S.CPAExtraBodyDescription>
          </S.CPAExtraBodyItem>
        </S.CPAExtraBodyContainer>
      </S.BodyContainer>
    </S.StyledCourseSelectionScreen>
  );
}

export const CourseDescription = (props) => {
  const [courseDetails, setCourseDetails] = React.useState(props.course);
  const targetCourse = (courseName) => {
    let imageContainer = {};
    switch (courseName) {
      case "CPA":
        imageContainer = props.images?.find(img => img.fields?.title === "CPA image");
        return <CPADescriptionScreen course={courseDetails} image={imageContainer?.fields?.file.url}/>;
      case "CGP":
        imageContainer = props.images?.find(img => img.fields?.title === "CGP Image");
        return <CGPDescriptionScreen course={courseDetails} image={imageContainer?.fields?.file.url}/>;
      case "CAT":
        imageContainer = props.images?.find(img => img.fields?.title === "CAT Image");
        return <CATDescriptionScreen course={courseDetails} image={imageContainer?.fields?.file.url}/>;
      case "GST":
        imageContainer = props.images?.find(img => img.fields?.title === "GST Image");
        return <GSTDescriptionScreen course={courseDetails} image={imageContainer?.fields?.file.url}/>;
      default:
        return <DefaultScreen />;
    }
  };

  React.useEffect(() => {
    setCourseDetails(props.course);
  }, [props.course]);

  return (
    <S.CourseFlexBox>
      {targetCourse(courseDetails?.serviceAbbr)}
    </S.CourseFlexBox>
  );
}

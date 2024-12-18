import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

const StyledCourseSelectionScreen = styled.div`
  color: white;
  margin-top: 10vh;
  font-size: 1.5vw;
  animation: 2.5s ${simpleAnimation};
`;
export default function CourseSelectionScreen(props) {
  const { clickedCourseId, serviceList, onSelectedCourse } = props;
  return (
    <StyledCourseSelectionScreen>
      <h1>Register</h1>
      <p className="course_selection_label">Select your preferred course:</p>
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
              onClick={() => onSelectedCourse(eachService, index)}
            >
              <p>{eachService.serviceName}</p>
              <p>{eachService.serviceAbbr}</p>
            </div>
          );
        })}
      </div>
    </StyledCourseSelectionScreen>
  );
}

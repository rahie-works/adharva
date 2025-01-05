import * as S from "./CourseSelectionStyledComponents"

export default function CourseSelectionScreen(props) {
  const { clickedCourseId, serviceList, onSelectedCourse } = props;
  return (
    <S.StyledCourseSelectionScreen>
      <S.StyledRegisterTitle>Register</S.StyledRegisterTitle>
      <S.CourseSelectionLabel>Select your preferred course:</S.CourseSelectionLabel>
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
    </S.StyledCourseSelectionScreen>
  );
}

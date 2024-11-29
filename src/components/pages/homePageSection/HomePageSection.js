import React, {useEffect, useState} from "react";
import { createClient } from "contentful";

// styles
import "../../../App.css";

// styled
import * as S from "./HomePageStyledComponents"

export const HomePageSection = () => {
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  const [homePageBanner, setHomePageBanner] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [homePageSlidesImage, setHomePageSlidesImage] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const homePageData = await client.getEntry("3JkQKk0Z4C3ZV70MkB9dZh");
        setHomePageBanner(
          homePageData?.fields?.homePageBanner?.fields?.file.url
        );
        setHomePageSlidesImage(homePageData.fields?.slideShowImages.map(img => img.fields.file.url));
      } catch (error) {
        console.log("==Data not received", error);
      }
    };
    fecthData();
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
          prevIndex === homePageSlidesImage.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [homePageSlidesImage.length]);


  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? homePageSlidesImage.length - 1 : prevIndex - 1
    );
};

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === homePageSlidesImage.length - 1 ? 0 : prevIndex + 1
    );
};


  return (
    <div>
       {homePageBanner && (
        <S.StyledBannerFigure>
          <S.StyledBannerImage
            src={homePageBanner}
            alt="home_page_banner"
          />
        </S.StyledBannerFigure>
      )}
      <S.SlideContainer>
        <S.StyledHomePageButton left={"10px"} onClick={goToPreviousSlide}>
          <i class="fas fa-chevron-left"></i>
        </S.StyledHomePageButton>
        <S.StyledHomePageButton right={"10px"} onClick={goToNextSlide}>
          <i class="fas fa-chevron-right"></i>
        </S.StyledHomePageButton>

        {homePageSlidesImage.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}

        <div className="indicator-container">
          {homePageSlidesImage.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </S.SlideContainer>
    </div>
  );
}

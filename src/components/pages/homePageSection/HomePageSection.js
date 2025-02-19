import React, {useEffect, useState} from "react";
import { createClient } from "contentful";
import { useSwipeable } from "react-swipeable";

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
  const [isMobile, setIsMobile] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [homePageDesktopSlidesImage, setHomePageDesktopSlidesImage] = useState([]);
  const [homePageMobileSlidesImage, setHomePageMobileSlidesImage] = useState([]);

  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  };

  useEffect(() => {
    const fecthData = async () => {
      try {
        const homePageData = await client.getEntry("3JkQKk0Z4C3ZV70MkB9dZh");
        setHomePageBanner(
          homePageData?.fields?.homePageBanner?.fields?.file.url
        );
        console.log("==homePageData", homePageData)
        setHomePageDesktopSlidesImage(homePageData.fields?.slideShowImages.map(img => img.fields.file.url));
        setHomePageMobileSlidesImage(homePageData.fields?.slideShowImagesMobile.map(img => img.fields.file.url));
      } catch (error) {
        console.log("==Data not received", error);
      }
    };

    fecthData();

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
          prevIndex === homePageDesktopSlidesImage.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setIsMobile(isMobileDevice())

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    }
  }, [homePageDesktopSlidesImage.length]);


  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? homePageDesktopSlidesImage.length - 1 : prevIndex - 1
    );
};

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === homePageDesktopSlidesImage.length - 1 ? 0 : prevIndex + 1
    );
};

const handlers = useSwipeable({
  onSwipedLeft: () => setCurrentIndex((prevIndex) => 
    prevIndex === homePageMobileSlidesImage.length - 1 ? 0 : prevIndex + 1),
  onSwipedRight: () =>  setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? homePageMobileSlidesImage.length - 1 : prevIndex - 1),
});

  return (
    <div style={{backgroundColor: "black"}}>
       {homePageBanner && (
        <S.StyledBannerFigure>
          <S.StyledBannerImage
            src={homePageBanner}
            alt="home_page_banner"
          />
        </S.StyledBannerFigure>
      )}
      <S.SlideContainer>
        {!isMobile && <S.StyledHomePageButton left={"10px"} onClick={goToPreviousSlide}>
          <i class="fas fa-chevron-left"></i>
        </S.StyledHomePageButton>}
        {!isMobile && <S.StyledHomePageButton right={"10px"} onClick={goToNextSlide}>
          <i class="fas fa-chevron-right"></i>
        </S.StyledHomePageButton>}

        {(!isMobile || screenWidth > 600 ? homePageDesktopSlidesImage : homePageMobileSlidesImage).map((src, index) => (
          <img
            {...handlers}
            key={index}
            src={src}
            style={!isMobile || screenWidth > 600 ? {objectFit: "cover"} : {objectFit: "contain"}}
            alt={`Slide ${index}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
        <div className="indicator-container">
          {homePageDesktopSlidesImage.map((_, index) => (
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

import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { createClient } from "contentful";

// styles
import "../../../App.css";
import "./HomePageSection.css";

const simpleAnimation = keyframes`${fadeIn}`;

const SlideContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 0;
    &.active {
      opacity: 1;
      animation: ${simpleAnimation} 1s ease-in-out;
    }
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: white;
    cursor: pointer;
    z-index: 2;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .indicator-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .indicator {
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
  }

  .indicator.active {
    opacity: 1;
    background-color: #3498db;
  }
`;

export default function HomePageSection() {
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  const [homePageBanner, setHomePageBanner] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [homePageSlidesImage, setHomePageSlidesImage] = React.useState([]);

  React.useEffect(() => {
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
      console.log("==currentIndex", currentIndex.current)
      setCurrentIndex((prevIndex) =>
          prevIndex === homePageSlidesImage.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [homePageSlidesImage.length]);

  // Navigate to the previous slide
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? homePageSlidesImage.length - 1 : prevIndex - 1
    );
    // currentIndex.current = currentIndex.current === 0 ? homePageSlidesImage.length - 1 : currentIndex.current - 1
  };

  // Navigate to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === homePageSlidesImage.length - 1 ? 0 : prevIndex + 1
    );
    // currentIndex.current = currentIndex.current === homePageSlidesImage.length - 1 ? 0 : currentIndex.current + 1
  };


  return (
    <div>
       {homePageBanner && (
        <figure className="banner-class">
          <img
            src={homePageBanner}
            style={{ width: "100%", height: "20vh" }}
            alt="home_page_banner"
          />
        </figure>
      )}
      <SlideContainer>
        <button className="nav-button prev" onClick={goToPreviousSlide}>
          &#10094;
        </button>
        
        <button className="nav-button next" onClick={goToNextSlide}>
          &#10095;
        </button>

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
      </SlideContainer>
    </div>
  );
}

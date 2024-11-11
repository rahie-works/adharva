import React from "react";
import { createClient } from "contentful";
import "./Partners.css";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

const FadeInLogos = styled.div`
  animation: 3s ${simpleAnimation};
`;

const FadeInPartnersTile = styled.div`
  animation: 3s ${simpleAnimation};
  font-size: 5vw;
  color: white;
  padding-top: 3vh;
  text-align: center;
`;

const FadeInPartnersLogoRow = styled.div`
  animation: 3s ${simpleAnimation};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 2vw;
`;

function Partners() {
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const refElement = React.useRef(null);

  const [partnersList, setPartnersList] = React.useState([]);

  React.useEffect(() => {
    const fecthData = async () => {
      try {
        const partnersList = await client.getEntry("35MLfN9qlNXJhUDYmmLGif");
        setPartnersList(partnersList?.fields?.partnerCompanies);
      } catch (error) {
        console.log("==Data not received", error);
      }
    };
    fecthData();
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("==entry", entry);
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "0px" }
    );
    observer.observe(refElement.current);

    return () => observer.disconnect({ rootMargin: "-100px" });
  }, [isIntersecting]);

  React.useEffect(() => {
    if (isIntersecting) {
      refElement.current.classList.add("fade-in");
    } else {
      refElement.current.classList.remove("fade-in");
    }
  }, [isIntersecting]);

  return (
    <FadeInLogos className="container" ref={refElement}>
      {isIntersecting && (
        <>
          <FadeInPartnersTile>Our Placement Partners</FadeInPartnersTile>
          <FadeInPartnersLogoRow>
            {partnersList?.map((eachPartner, index) => {
              return (
                <img
                  src={eachPartner.fields?.file?.url}
                  key={index}
                  className="logo"
                  alt="partner_logo"
                />
              );
            })}
          </FadeInPartnersLogoRow>
        </>
      )}
    </FadeInLogos>
  );
}

export default Partners;

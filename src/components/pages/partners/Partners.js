import React from "react";
import { createClient } from "contentful";
import "./Partners.css";
import * as S from "./PartnerStyledComponents"

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
    <S.FadeInLogos ref={refElement}>
      {isIntersecting && (
        <>
          <S.FadeInPartnersTile>Our Placement Partners</S.FadeInPartnersTile>
          <S.FadeInPartnersLogoRow>
            {partnersList?.map((eachPartner, index) => {
              return (
                <S.PartnersLogo
                  src={eachPartner.fields?.file?.url}
                  key={index}
                  alt="partner_logo"
                />
              );
            })}
          </S.FadeInPartnersLogoRow>
        </>
      )}
    </S.FadeInLogos>
  );
}

export default Partners;

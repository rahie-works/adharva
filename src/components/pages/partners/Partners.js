import React from "react";
import { createClient } from "contentful";
import "./Partners.css";

function Partners() {
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

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

  return (
    <div className="container">
      <h1 className="partners-title">Our Placement Partners</h1>
      <div className="logo-row">
        {partnersList?.map((eachPartner, index) => {
          return (
            <img
              src={eachPartner.fields?.file?.url}
              key={index}
              className="logo"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Partners;

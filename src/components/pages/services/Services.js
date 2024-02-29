import React, { useState, useEffect } from "react";
import "../../../App.css";
import Cards from "../../cards/Cards";
import {
  SERVICES_SECTION_NAME,
  SERVICE_CARDS_DATA,
  SERVICES_TITLE,
} from "./ServicesConstant";
import { createClient } from "contentful";

export default function Services() {
  const [servicesSectionData, setservicesSectionData] = useState({});
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  useEffect(() => {
    const fecthData = async () => {
      try {
        const servicesSectionData = await client.getEntry(
          "4OKb4mEv1upnVGbo5fxkEb"
        );
        setservicesSectionData(servicesSectionData);
      } catch (error) {
        console.log("==Data not received", error);
      }
    };
    fecthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("==servicesSectionData", servicesSectionData);

  const SectionData = {
    section: SERVICES_SECTION_NAME,
    title: servicesSectionData?.fields?.servicesTitle || SERVICES_TITLE,
  };
  return <Cards cardData={SERVICE_CARDS_DATA} sectionData={SectionData} />;
}

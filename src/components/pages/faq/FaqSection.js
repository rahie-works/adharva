import React from "react";
import { FAQ_BANK, FAQ_TITLE } from "./QuestionBank";
import FAQCards from "../../cards/FAQCards";

export const FaqSection = () => {
  const SectionData = {
    section: "FAQ",
    title: FAQ_TITLE,
  };
  return <FAQCards sectionData={SectionData} cardData={FAQ_BANK} />;
};

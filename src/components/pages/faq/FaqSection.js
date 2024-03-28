import React from "react";

import FAQCards from "../../cards/FAQCards";

import { FAQ_BANK, FAQ_TITLE } from "./QuestionBank";

export const FaqSection = () => {
  const SectionData = {
    section: "FAQ",
    title: FAQ_TITLE,
  };
  return <FAQCards sectionData={SectionData} cardData={FAQ_BANK} />;
};

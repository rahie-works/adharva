import React from "react";

// components
import FAQCards from "../../cards/FAQCards";

// constants
import { FAQ_BANK, FAQ_TITLE } from "./QuestionBank";

export default function FaqSection() {
  const SectionData = {
    section: "FAQ",
    title: FAQ_TITLE,
  };
  return <FAQCards sectionData={SectionData} cardData={FAQ_BANK} />;
}

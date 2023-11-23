import React from 'react';
import './FaqSection.css'
import { FAQ_BANK , FAQ_TITLE} from './QuestionBank'
import Cards from '../../cards/Cards'

export const FaqSection = () => {

    const SectionData = {
        section: "FAQ",
        title: FAQ_TITLE,
    }
    return (
        <Cards sectionData={SectionData} cardData={FAQ_BANK}/>
    );
}
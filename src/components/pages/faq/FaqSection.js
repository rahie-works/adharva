import React from 'react';
import './FaqSection.css'
import { FAQ_BANK , FAQ_TITLE} from './QuestionBank'
import FAQCards from '../../cards/FAQCards'

export const FaqSection = () => {
    return (
<<<<<<< Updated upstream
        <Cards sectionData={FAQ_TITLE} cardData={FAQ_BANK}/>
=======
        <FAQCards sectionData={SectionData} cardData={FAQ_BANK}/>
>>>>>>> Stashed changes
    );
}
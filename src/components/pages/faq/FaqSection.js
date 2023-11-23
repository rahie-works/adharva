import React from 'react';
import './FaqSection.css'
import { FAQ_BANK , FAQ_TITLE} from './QuestionBank'
import Cards from '../../cards/Cards'

export const FaqSection = () => {
    return (
        <Cards sectionData={FAQ_TITLE} cardData={FAQ_BANK}/>
    );
}
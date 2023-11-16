import React from 'react';
import './FaqSection.css'
import { QuestionCard } from './QuestionCard/QuestionCard';

export const FaqSection = () => {
    return (
        <>
            <div className='faq-section'>
                <h1>FAQ</h1>
                <div className='faq-cards'>
                    <QuestionCard/>
                </div>
            </div>
        </>
    );
}
import React from 'react';
import './FaqSection.css'
import { QuestionCard } from './QuestionCard/QuestionCard';

export const FaqSection = () => {
    return (
        <>
            <div className='faq-section'>
                <h1>FAQ</h1>
                <div className='faq-cards'>
                    <div className='faq__wrapper'>
                        <div className='faq__items'>
                            <QuestionCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import { FAQ_BANK } from './QuestionBank'
import './QuestionCard.css'

export const QuestionCard = () => {
    const questionBank = FAQ_BANK;
    return (
        <>
            <div className="question-section">
                {questionBank.map((faq, index) => {
                    return <div className='question-card' key={index}>${faq.question}</div>
                })}
            </div>
        </>
    )
}

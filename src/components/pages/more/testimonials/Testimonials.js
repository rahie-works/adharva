import { TESTIMONIAL_TITLE, UserTestimonials } from './TestimonialContent';
import './Testimonial.css';
import right from "../../../../images/right.png"

export default function Testimonials() {

    return (
        <div className="contain">
            <h1>{TESTIMONIAL_TITLE}</h1>
            <div className="testimonialContainer">
            { UserTestimonials.map((eachEntry) => {
                return (
                <div className="testimonials">
                    <img className="quote_image" alt="quote" src={right}/>
                    <div className='content_testimonials'>
                        <h3 className='testimonial_name'>{eachEntry.firstName + " " + eachEntry.lastName}</h3>
                        <p className="testimonial_comments">{eachEntry.comment}</p>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}
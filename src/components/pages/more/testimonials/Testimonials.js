import { TESTIMONIAL_TITLE, UserTestimonials } from './TestimonialContent';
import './Testimonial.css';

export default function Testimonials() {

    return (
        <div className="contain">
            <h1>{TESTIMONIAL_TITLE}</h1>
            <div className="testimonialContainer">
            { UserTestimonials.map((eachEntry) => {
                return (
                <div className="testimonials">
                    <h3>{eachEntry.firstName}<p className="lastname">{" " + eachEntry.lastName}</p></h3>
                </div>
                )
            })}
            </div>
        </div>
    )
}
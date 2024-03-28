import React, { useState, useEffect } from "react";
import { createClient } from "contentful";

import { TESTIMONIAL_TITLE, UserTestimonials } from "./TestimonialContent";
import right from "../../../images/right.png";
import googleLogo from "../../../images/googlelogo.png";

import "./Testimonial.css";

export default function Testimonials() {
  const [testimonialsSectionData, settestimonialsSectionData] = useState([]);
  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  useEffect(() => {
    const fecthData = async () => {
      try {
        const servicesSectionData = await client.getEntry(
          "zkZKW8RcXxN4nnSvOp6qp"
        );
        settestimonialsSectionData(
          servicesSectionData?.fields?.userTestimonials?.userTestimonials
        );
      } catch (error) {
        console.log("==Data not received", error);
        settestimonialsSectionData(UserTestimonials);
      }
    };
    fecthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="contain">
      <h1>
        {testimonialsSectionData.fields?.sectionTitle || TESTIMONIAL_TITLE}
      </h1>
      <div className="testimonialContainer">
        {testimonialsSectionData.map((eachEntry) => {
          return (
            <div className="testimonials">
              <img className="quote_image" alt="quote" src={right} />
              <div className="content_testimonials">
                <h3 className="testimonial_name">
                  {eachEntry.firstName + " " + eachEntry.lastName}
                </h3>
                <p className="testimonial_comments">{eachEntry.comment}</p>
                <p className="testimonials_date">
                  {eachEntry.courseAttended ? "Attended" : ""}{" "}
                  {eachEntry.courseAttended} - {eachEntry.dated}
                </p>
              </div>
            </div>
          );
        })}
        <div className="more-review-container">
          <h4>Looking for more reviews..? Catch us on</h4>
          <a href="https://maps.app.goo.gl/E1iQqUxwQdQmjE196" target="blank">
            <img className="google-image" src={googleLogo} />
          </a>
        </div>
      </div>
    </div>
  );
}

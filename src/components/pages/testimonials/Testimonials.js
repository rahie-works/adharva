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
  }, []);

  return (
    <div className="contain">
      <h1>
        {testimonialsSectionData.fields?.sectionTitle || TESTIMONIAL_TITLE}
      </h1>
      <div className="testimonialContainer">
        {testimonialsSectionData.map((eachEntry, index) => {
          return (
            <div className="testimonials" key={index}>
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
          <a
            href="https://www.google.com/maps/place/Adharva+Institute+of+Commerce+-+A+I+C/@11.1974246,76.0726099,12z/data=!4m8!3m7!1s0x3ba63b599c395a4b:0xdbb080e178143d64!8m2!3d11.2781347!4d76.2287482!9m1!1b1!16s%2Fg%2F11v3q4fm90?entry=ttu"
            target="blank"
            style={{ color: "white" }}
          >
            <h4>Look up for more reviews here</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './Testimonials.scss';

interface DataProps {
  name: any;
  jobTitle: any;
  comment: any;
  profile: any;
}

interface TestimonialProps {
  testimonial: DataProps;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="testimonials__wrapper">
      <div className="columns is-mobile is-paddingless is-marginless">
        <div className="column is-2">
          <img width="100" src={testimonial.profile} alt={testimonial.name} />
        </div>
        <div className="column">
          <div className="testimonials__item--name">{testimonial.name}</div>
          <div className="testimonials__item--jobTitle">
            {testimonial.jobTitle}
          </div>
        </div>
      </div>
      <div className="testimonials__item--comment">{testimonial.comment}</div>
    </div>
  );
};

export default Testimonial;

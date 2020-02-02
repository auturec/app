import React from 'react';
import APP_LOGO from 'assets/images/app.png';

import Testimonial from './Testimonial';

import './Testimonials.scss';

const testimonials = [
  {
    name: <div>Jeff Tan</div>,
    jobTitle: <div>Parent of child with autism</div>,
    comment: (
      <div>
        Asturec has been extremely great help in answering all my enquiries in
        regards to autism
      </div>
    ),
    profile: APP_LOGO
  },
  {
    name: <div>Anonymous</div>,
    jobTitle: <div>Parent of child with autism</div>,
    comment: (
      <div>
        Asturec has been extremely great help in answering all my enquiries in
        regards to autism
      </div>
    ),
    profile: APP_LOGO
  },
  {
    name: <div>Angela Low</div>,
    jobTitle: <div>Parent of child with autism</div>,
    comment: (
      <div>
        As compared to other apps in the market, Asturec provided next steps of
        action for parents. There is even a forum for clarification!
      </div>
    ),
    profile: APP_LOGO
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="columns is-centered is-marginless is-paddingless">
      <div className="column is-two-thirds">
        <div className="testimonials__spacing">
          <div className="testimonials__header">What other are saying...</div>
          {testimonials.map(testimonial => (
            <Testimonial testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import Question from './Question';
import './Faqs.scss';

const data = [
  {
    to: '1',
    question: 'What is Autism?'
  },
  {
    to: '2',
    question: 'What causes Autism?'
  }
];

const Faqs: React.FC = () => {
  return (
    <div className="columns is-centered is-marginless is-paddingless">
      <div className="column is-two-thirds">
        <div className="faqs__spacing">
          <div className="faqs__header">How can we help you?</div>
          <div className="faqs__search">
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="text"
                  placeholder="Search"
                  value=""
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-search" />
                </span>
              </div>
            </div>
          </div>
          <div>
            {data.map(item => (
              <div key={item.to}>
                <Question to={item.to} question={item.question} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

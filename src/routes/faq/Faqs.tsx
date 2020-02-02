import React from 'react';
import './Faqs.scss';

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
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

import React from 'react';
import { Link } from 'react-router-dom';

interface QuestionProps {
  to: string;
  question: string;
}

const Question: React.FC<QuestionProps> = ({ to, question }) => {
  return (
    <div>
      <Link to={`/faq/${to}`}>{question}</Link>
    </div>
  );
};

export default Question;

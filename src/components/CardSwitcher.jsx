import React, { useState } from 'react';
import './styles.css';

const QuestionAnswerCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="card-container1" onClick={toggleAnswer}>
      <div className="question">{question}</div>
      <div className={`answer ${showAnswer ? 'show' : ''}`}>{answer}</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <QuestionAnswerCard
        question="What is React?"
        answer="React is a JavaScript library for building user interfaces."
      />
      <QuestionAnswerCard
        question="What is a component?"
        answer="A component is a reusable piece of code that can be used to build elements that share functionality and styling."
      />
    </div>
  );
};

export default App;

import React from "react";

const Feedback = ({ value, totalFeedback, percentGood }) => {
  return (
    <div>
      <ul>
        <li>good: {value.good}</li>
        <li>neutral: {value.neutral}</li>
        <li>bad: {value.bad}</li>
        <li>total: {totalFeedback}</li>
        <li>positive: {percentGood}%</li>
      </ul>
    </div>
  );
};

export default Feedback;

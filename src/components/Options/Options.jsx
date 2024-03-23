import React from "react";

export const Options = ({ handleClick, totalFeedback, handleReset }) => {
  return (
    <div>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      {totalFeedback !== 0 && (
        <button onClick={() => handleReset()}>Reset</button>
      )}
    </div>
  );
};

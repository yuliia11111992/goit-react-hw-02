import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [value, setValue] = useState(() => {
    const savedValue = window.localStorage.getItem("saved-value");
    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }
    return state;
  });

  const updateFeedback = (feedbackType) => {
    setValue({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    });
  };
  const totalFeedback = value.good + value.neutral + value.bad;
  function handleReset() {
    setValue(state);
  }
  const percentGood = Math.round((value.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-value", JSON.stringify(value));
  }, [value]);
  return (
    <>
      <Description />
      <Options
        handleClick={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          value={value}
          percentGood={percentGood}
          totalFeedback={totalFeedback}
        />
      )}
    </>
  );
}

export default App;

import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Results = () => {
  const { quizes, selectedAnswers } = useContext(AppContext);
  console.log(quizes, selectedAnswers);
  const answers = [...quizes.filter((q, i) => q.answer === selectedAnswers[i])];
  return (
    <div className="score">{`${answers.length} / ${selectedAnswers.length}`}</div>
  );
};

export default Results;

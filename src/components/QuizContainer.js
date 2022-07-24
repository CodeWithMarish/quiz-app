import React, { useContext } from "react";
import { AppContext } from "../App";
import Button from "./Button";

const QuizContainer = () => {
  const {
    quizes,
    selectedAnswers,
    setSelectedAnswers,
    currentQuiz,
    setCurrentQuiz,
  } = useContext(AppContext);
  const quiz = quizes[currentQuiz];

  return (
    <div className="quiz__container center">
      <h3 className="quiz__question">{quiz.question}</h3>
      <div className="choices mt-20">
        {quiz.choices.map((c, i) => {
          return (
            <p
              key={c}
              onClick={() => {
                let answers = [...selectedAnswers];
                answers[currentQuiz] = i;
                setSelectedAnswers((prev) => [...answers]);
              }}
              className={`quiz__choice ${
                selectedAnswers[currentQuiz] === i ? "selected" : ""
              }`}
            >
              {c}
            </p>
          );
        })}
      </div>
      <div className="nav-buttons mt-20">
        <Button
          onClick={
            currentQuiz > 0
              ? () => {
                  setCurrentQuiz(currentQuiz - 1);
                }
              : null
          }
          label={"< Prev"}
        />
        <Button
          onClick={() => {
            setCurrentQuiz(currentQuiz + 1);
          }}
          label={currentQuiz < quizes.length - 1 ? "Next >" : "Submit"}
        />
      </div>
    </div>
  );
};

export default QuizContainer;

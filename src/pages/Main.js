import React, { Suspense, useEffect, useState } from "react";
import { AppContext } from "../App";
const ErrorBoundary = React.lazy(() => import("../components/ErrorBoundary"));
const Welcome = React.lazy(() => import("../components/Welcome"));
const QuizContainer = React.lazy(() => import("../components/QuizContainer"));
const Results = React.lazy(() => import("../components/Results"));
const Main = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(-1);
  const [quizes, setQuizes] = useState([]);
  const getData = async () => {
    const res = await fetch("http://localhost:8000");
    const data = await res.json();
    console.log(data);
    setQuizes([...data]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        quizes,
        selectedAnswers,
        setSelectedAnswers,
        currentQuiz,
        setCurrentQuiz,
      }}
    >
      <ErrorBoundary>
        <Suspense fallback={<div>loading...</div>}>
          {currentQuiz === -1 && <Welcome />}
          {currentQuiz > -1 && currentQuiz < quizes.length && <QuizContainer />}
          {currentQuiz >= quizes.length && <Results />}
        </Suspense>
      </ErrorBoundary>
    </AppContext.Provider>
  );
};
export default Main;

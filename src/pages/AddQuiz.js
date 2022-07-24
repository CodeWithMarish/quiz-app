import React, { useEffect, useRef, useState } from "react";
const AddQuiz = () => {
  const [data, setData] = useState({
    question: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: 0,
  });
  const firstInpRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { question, choice1, choice2, choice3, choice4, answer } = data;
    await fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify({
        question,
        choices: [choice1, choice2, choice3, choice4],
        answer,
      }),
    });
  };
  useEffect(() => {
    firstInpRef.current.focus();
  }, []);
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container">
      <h2>Add Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={firstInpRef}
          name="question"
          onChange={handleChange}
          required={true}
          placeholder="Question"
          type={"text"}
        />
        <div>
          <input
            onChange={handleChange}
            name="choice1"
            required={true}
            placeholder="Choice 1"
            type={"text"}
          />
          <input
            onChange={handleChange}
            name="choice2"
            required={true}
            placeholder="Choice 2"
            type={"text"}
          />
          <input
            name="choice3"
            onChange={handleChange}
            placeholder="Choice 3"
            type={"text"}
          />
          <input
            onChange={handleChange}
            name="choice4"
            placeholder="Choice 4"
            type={"text"}
          />
        </div>
        <input
          name="answer"
          required={true}
          onChange={handleChange}
          placeholder="Answer"
          type={"number"}
          min={0}
          max={3}
        />
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
};
export default AddQuiz;

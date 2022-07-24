import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import Button from "./Button";
import Modal from "./Modal";
const Welcome = () => {
  const { setCurrentQuiz } = useContext(AppContext);
  const [showRules, setshowRules] = useState(false);
  return (
    <div className={`home center`}>
      <h2 className="text-title">Quizish</h2>
      <p className="text-body mt-10 mb-20">Welcome to React Quiz!!!</p>
      <div className="welcome-buttons">
        <Button onClick={() => setCurrentQuiz(0)} label="Let's Start >" />
        <a href="/add">
          <Button onClick={() => {}} label="Add Quiz >" />
        </a>
        <Button onClick={() => setshowRules(true)} label="Rules" />
      </div>
      <Modal title={"Rules"} show={showRules} setShow={setshowRules}>
        <ul>
          <li>Each questions will be given 10 seconds</li>
          <li>Results will be displayed after submitting</li>
        </ul>
      </Modal>
    </div>
  );
};
export default Welcome;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddQuiz from "./pages/AddQuiz";
import Main from "./pages/Main";
export const AppContext = React.createContext();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route index path="/add" element={<AddQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

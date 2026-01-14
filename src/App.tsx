import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PracticeProblems from "./PracticeProblems";
import ChooseSettings from "./ChooseSettings";

function App() {
  const [currentView, setCurrentView] = useState<"settings" | "practice">(
    "settings"
  );
  const [numberOfProblems, setNumberOfProblems] = useState(0);

  const pageChangeHandler = (view: "settings" | "practice") => {
    setCurrentView(view);
  }

  const setNumberOfProblemsHandler = (num: number) => {
    setNumberOfProblems(num);
  }

  return (
    <>
      <Header />
      {currentView === "settings" ? (
        <ChooseSettings setPage={pageChangeHandler} setNumberOfProblems={setNumberOfProblemsHandler} />
      ) : (
        <PracticeProblems numberOfProblems={numberOfProblems} setPage={pageChangeHandler} />
      )}
    </>
  );
}

export default App;

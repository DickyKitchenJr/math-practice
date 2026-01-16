import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PracticeProblems from "./PracticeProblems";
import ChooseSettings from "./ChooseSettings";

function App() {
  const [currentView, setCurrentView] = useState<"settings" | "practice">(
    "settings"
  );

  const pageChangeHandler = (view: "settings" | "practice") => {
    setCurrentView(view);
  };

  return (
    <>
      <Header />
      {currentView === "settings" ? (
        <ChooseSettings setPage={pageChangeHandler} />
      ) : (
        <PracticeProblems setPage={pageChangeHandler} />
      )}
    </>
  );
}

export default App;

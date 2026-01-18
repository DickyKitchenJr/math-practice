import { useContext } from "react";
import MathProblem from "../components/MathProblem";
import { MathPracticeSettingsContext } from "../MathPracticeContext";
import "./PracticeProblems.css";

interface PracticeProblemsProps {
  setPage: (view: "settings" | "practice") => void;
}

function PracticeProblems({ setPage }: PracticeProblemsProps) {
  const { numberOfProblems, resetSettingsHandler } = useContext(
    MathPracticeSettingsContext,
  )!;

  const backToSettingsHandler = () => {
    resetSettingsHandler();
    setPage("settings");
  };

  return (
    <>
      <button onClick={() => backToSettingsHandler()}>Back to Settings</button>
      <main>
        <h2>Practice Problems</h2>
        <p>Write out your work on a sheet of paper.</p>
        {/* TODO: figure out a way to make sure problems don't repeat */}
        <div className="problems">
          {Array.from({ length: numberOfProblems }, (_, index) => (
            <div key={index} className="problem-box">
              {index + 1}.<MathProblem />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default PracticeProblems;

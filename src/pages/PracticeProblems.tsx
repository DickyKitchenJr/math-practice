import { useContext } from "react";
import MathProblem from "../components/MathProblem";
import { MathPracticeSettingsContext } from "../MathPracticeContext";
import "./PracticeProblems.css";

interface PracticeProblemsProps {
  setPage: (view: "settings" | "practice") => void;
}

function PracticeProblems({ setPage }: PracticeProblemsProps) {
  const { numberOfProblems, resetSettingsHandler, includePrintOption } =
    useContext(MathPracticeSettingsContext)!;

  const backToSettingsHandler = () => {
    resetSettingsHandler();
    setPage("settings");
  };

  const printProblemsHandler = () => {
    window.print();
  };

  return (
    <>
      <main>
        <div className="buttons-div">
          <button
            className="back-and-print-button"
            onClick={() => backToSettingsHandler()}
          >
            Back to Settings
          </button>
          {includePrintOption ? (
            <button
              className="back-and-print-button"
              onClick={() => printProblemsHandler()}
            >
              Print Problems
            </button>
          ) : null}
        </div>
        <h2>Practice Problems</h2>
        <p className="subheader">Write out your work on a sheet of paper.</p>
        {/* TODO: figure out a way to make sure problems don't repeat */}
        <div className="problems">
          {Array.from({ length: numberOfProblems }, (_, index) => (
            <div key={index} className="problem-box">
              <p className="problem-number">{index + 1}.</p>
              <MathProblem />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default PracticeProblems;

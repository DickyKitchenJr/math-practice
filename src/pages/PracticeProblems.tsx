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
      <main>
        <button className="back-button" onClick={() => backToSettingsHandler()}>
          Back to Settings
        </button>
        <h2>Practice Problems</h2>
        <p className="subheader">Write out your work on a sheet of paper.</p>
        {/* TODO: remove and/or replace when a better message is created or a better solution for keeping people from cheating by just entering in wrong answer and copying the correct answer is found*/}
        <p
          className="subheader"
          style={{
            marginTop: "-1rem",
            textAlign: "center",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          If you submit a wrong answer, the message "Wrong" message will display
          with the correct answer, and will remain even if you correct the
          answer and re-submit the answer.
        </p>
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

import { useContext } from "react";
import MathProblem from "./components/MathProblem";
import { MathPracticeSettingsContext } from "./MathPracticeContext";

interface PracticeProblemsProps {
  setPage: (view: "settings" | "practice") => void;
}

function PracticeProblems({
  setPage,
}: PracticeProblemsProps) {
  const {numberOfProblems} = useContext(MathPracticeSettingsContext)!;

  return (
    <>
      <button onClick={() => setPage("settings")}>Back to Settings</button>
      <main>
        <h2>Practice Problems</h2>
        <p>Write out your work on a sheet of paper.</p>
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

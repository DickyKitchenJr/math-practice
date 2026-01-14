import MathProblem from "./components/MathProblem";

interface PracticeProblemsProps {
  numberOfProblems: number;
  setPage: (view: "settings" | "practice") => void;
}

function PracticeProblems({
  numberOfProblems,
  setPage,
}: PracticeProblemsProps) {
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

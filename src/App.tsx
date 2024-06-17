import "./App.css";
import MathProblem from "./components/MathProblem";
import Header from "./components/Header";

function App() {
  //used to set how many problems will be displayed
  const numberOfProblems = 15;

  return (
    <>
      <Header />
      <div className="problems">
        {Array.from({ length: numberOfProblems }, (_, index) => (
          <div key={index} className="problem-box">
            {index + 1}.<MathProblem />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

import { useContext } from "react";
import { MathPracticeSettingsContext } from "./MathPracticeContext";

interface ChooseSettingsProps {
  setPage: (view: "settings" | "practice") => void;
}

function ChooseSettings({ setPage}: ChooseSettingsProps) {
  const {setNumberOfProblemsHandler, setLengthOfDigitsInProblemsHandler} = useContext(MathPracticeSettingsContext)!;

  return (
    <>
      <button onClick={() => setPage("practice")}>Start Practice</button>
      <main>
        <form>
          <label htmlFor="numProblems">Number of Problems: </label>
          <input
            type="number"
            id="numProblems"
            onChange={(e) => setNumberOfProblemsHandler(Number(e.target.value))}
          />
          {/* TODO:  add options for how many digits each problem can be*/}
          <label htmlFor="lengthOfDigits">Length of Digits in Problems: </label>
          <select
            id="lengthOfDigits"
            onChange={(e) => setLengthOfDigitsInProblemsHandler(Number(e.target.value))}
          >
            <option value={1}>0-9</option>
            <option value={2}>0-99</option>
            <option value={3}>0-999</option>
            <option value={4}>0-9999</option>
            <option value={5}>0-99999</option>
          </select>
          {/* TODO:  add options for which operators can be used*/}
        </form>
      </main>
      <footer>
        <p className="instructions">
          {/* TODO:  add a better footer message... support section?*/}
          Use The Options Above To Select Your Settings
        </p>
      </footer>
    </>
  );
}

export default ChooseSettings

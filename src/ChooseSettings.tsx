import { useContext } from "react";
import { MathPracticeSettingsContext } from "./MathPracticeContext";

interface ChooseSettingsProps {
  setPage: (view: "settings" | "practice") => void;
}

function ChooseSettings({ setPage }: ChooseSettingsProps) {
  const {
    setNumberOfProblemsHandler,
    setLengthOfDigitsInProblemsHandler,
    setMathOperatorOptionsHandler,
  } = useContext(MathPracticeSettingsContext)!;

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
          {/*option for how many digits each problem can be*/}
          <label htmlFor="lengthOfDigits">Length of Digits in Problems: </label>
          <select
            id="lengthOfDigits"
            onChange={(e) =>
              setLengthOfDigitsInProblemsHandler(Number(e.target.value))
            }
          >
            <option value={1}>0-9</option>
            <option value={2}>0-99</option>
            <option value={3}>0-999</option>
            <option value={4}>0-9999</option>
            <option value={5}>0-99999</option>
          </select>
          {/*options for which operators can be used*/}
          <h2>Math Operators to Include: </h2>
          <input
            type="checkbox"
            name="addition"
            value={"+"}
            onChange={(e) =>
              setMathOperatorOptionsHandler(String(e.target.value))
            }
          />
          <label htmlFor="addition">+</label>
          <input
            type="checkbox"
            name="subtraction"
            value={"-"}
            onChange={(e) =>
              setMathOperatorOptionsHandler(String(e.target.value))
            }
          />
          <label htmlFor="subtraction">-</label>
          <input
            type="checkbox"
            name="multiplication"
            value={"x"}
            onChange={(e) =>
              setMathOperatorOptionsHandler(String(e.target.value))
            }
          />
          <label htmlFor="multiplication">x</label>
          <input
            type="checkbox"
            name="division"
            value={"/"}
            onChange={(e) =>
              setMathOperatorOptionsHandler(String(e.target.value))
            }
          />
          <label htmlFor="division">/</label>
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

export default ChooseSettings;

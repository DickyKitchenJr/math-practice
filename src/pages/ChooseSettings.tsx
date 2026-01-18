import { useContext } from "react";
import { MathPracticeSettingsContext } from "../MathPracticeContext";
import "./ChooseSettings.css";

interface ChooseSettingsProps {
  setPage: (view: "settings" | "practice") => void;
}

function ChooseSettings({ setPage }: ChooseSettingsProps) {
  const {
    numberOfProblems,
    lengthOfDigitsInProblems,
    mathOperatorOptions,
    setNumberOfProblemsHandler,
    setLengthOfDigitsInProblemsHandler,
    setMathOperatorOptionsHandler,
  } = useContext(MathPracticeSettingsContext)!;

  const isFormComplete =
    numberOfProblems > 0 &&
    lengthOfDigitsInProblems > 0 &&
    mathOperatorOptions.length > 0;

  return (
    <>
      <main>
        <h2>Use the following settings to customize your practice session</h2>
        <form className="settings-form">
          <fieldset>
            <label htmlFor="numProblems">Number of Problems: </label>
            <input
              type="number"
              id="numProblems"
              onChange={(e) =>
                setNumberOfProblemsHandler(Number(e.target.value))
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor="lengthOfDigits">
              Length of Digits in Problems:{" "}
            </label>
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
          </fieldset>

          <fieldset>
            <legend>Math Operators to Include: </legend>
            <div>
              <input
                type="checkbox"
                name="addition"
                value={"+"}
                onChange={(e) =>
                  setMathOperatorOptionsHandler(String(e.target.value))
                }
              />
              <label htmlFor="addition">addition</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="subtraction"
                value={"-"}
                onChange={(e) =>
                  setMathOperatorOptionsHandler(String(e.target.value))
                }
              />
              <label htmlFor="subtraction">subtraction</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="multiplication"
                value={"x"}
                onChange={(e) =>
                  setMathOperatorOptionsHandler(String(e.target.value))
                }
              />
              <label htmlFor="multiplication">multiplication</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="division"
                value={"/"}
                onChange={(e) =>
                  setMathOperatorOptionsHandler(String(e.target.value))
                }
              />
              <label htmlFor="division">division</label>
            </div>
          </fieldset>
          <button
            disabled={!isFormComplete}
            onClick={() => setPage("practice")}
          >
            Start Practice
          </button>
        </form>
      </main>
      <footer>
        <p className="instructions">
          {/* TODO:  add a better footer message... support section?*/}
          When you are done with your practice session, feel free to return to
          this page to adjust your settings and create a new session!
        </p>
      </footer>
    </>
  );
}

export default ChooseSettings;

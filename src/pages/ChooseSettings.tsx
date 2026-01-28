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
    onlyAllowWholeNumbers,
    allowNegativeAnswers,
    setNumberOfProblemsHandler,
    setLengthOfDigitsInProblemsHandler,
    setMathOperatorOptionsHandler,
    setAllowNegativeAnswersHandler,
    setOnlyAllowWholeNumbersHandler,
  } = useContext(MathPracticeSettingsContext)!;

  const isFormComplete =
    numberOfProblems > 0 &&
    lengthOfDigitsInProblems > 0 &&
    mathOperatorOptions.length > 0 &&
    onlyAllowWholeNumbers !== undefined &&
    allowNegativeAnswers !== undefined;
  return (
    <>
      <main>
        <h2>Use the following settings to customize your practice session</h2>
        <form className="settings-form">
          <fieldset>
            <label htmlFor="numberOfProblems" className="settings-form-label">
              Number of Problems:{" "}
            </label>
            <input
              type="number"
              id="numberOfProblems"
              name="numberOfProblems"
              onChange={(e) =>
                setNumberOfProblemsHandler(Number(e.target.value))
              }
            />
          </fieldset>

          <fieldset>
            <label htmlFor="lengthOfDigits" className="settings-form-label">
              Length of Digits in Problems:{" "}
            </label>
            <select
              id="lengthOfDigits"
              name="lengthOfDigits"
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
            <label
              htmlFor="allowNegativeAnswers"
              className="settings-form-label"
            >
              Allow for Negative Answers:{" "}
            </label>
            <select
              id="allowNegativeAnswers"
              name="allowNegativeAnswers"
              onChange={(e) =>
                setAllowNegativeAnswersHandler(e.target.value === "true")
              }
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </fieldset>

          <fieldset>
            <label
              htmlFor="onlyAllowWholeNumbers"
              className="settings-form-label"
            >
              Only Allow Whole Number Answers:{" "}
            </label>
            <select
              id="onlyAllowWholeNumbers"
              name="onlyAllowWholeNumbers"
              onChange={(e) =>
                setOnlyAllowWholeNumbersHandler(e.target.value === "true")
              }
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </fieldset>

          <fieldset>
            <legend className="settings-form-label">
              Math Operators to Include:{" "}
            </legend>
            <div className="checkbox-div">
              <input
                type="checkbox"
                name="addition"
                id="addition"
                value={"+"}
                onChange={(e) =>
                  setMathOperatorOptionsHandler(String(e.target.value))
                }
              />
              <label htmlFor="addition">addition</label>
            </div>
            <div className="checkbox-div">
              <input
                type="checkbox"
                name="subtraction"
                id="subtraction"
                value={"-"}
                onChange={(e) =>
                  setMathOperatorOptionsHandler(String(e.target.value))
                }
              />
              <label htmlFor="subtraction">subtraction</label>
            </div>
            <div className="checkbox-div">
              <input
                type="checkbox"
                name="multiplication"
                id="multiplication"
                value={"x"}
                onChange={(e) =>
                  setMathOperatorOptionsHandler(String(e.target.value))
                }
              />
              <label htmlFor="multiplication">multiplication</label>
            </div>
            <div className="checkbox-div">
              <input
                type="checkbox"
                name="division"
                id="division"
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
        <h2>Considerations:</h2>
        <ul>
          <li>
            this program is intended for quick practice sessions rather than
            long, exhaustive drills
          </li>
          <li>
            by combining a high number of problems with restricted options, you
            are more likely to see repeated problems vs unique problems
          </li>
          <li>
            if you find that your problems are repeating too often, consider
            increasing the length of digits or the variety of math operators
          </li>
          <li>
            if you find the problems too difficult at first, consider working
            with less digits in the problems and building up to more as you get
            comfortable
          </li>
          <li>
            while we are hoping to expand the program at some point to show your
            work within the program, currently it is advised to work out
            problems on a sheet of paper
          </li>
          <li>
            while we may expand it's target range in the future, currently it is
            intended for elementary and kindergarten school level math practice
          </li>
        </ul>
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

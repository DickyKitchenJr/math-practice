import { useContext } from "react";
import { MathPracticeSettingsContext } from "../MathPracticeContext";
import AnswerAndCheck from "./AnswerAndCheck";

function MathProblem() {
  const numbers: [number, number] = [0, 0];
  let symbol: string = "";
  const { lengthOfDigitsInProblems: len, mathOperatorOptions } = useContext(
    MathPracticeSettingsContext
  )!;
  const maxNumberLength: number = Math.pow(10, len) - 1;

  //set initial math operator symbol
  const SymbolSelect = (): string => {
    symbol =
      mathOperatorOptions[
        Math.floor(Math.random() * mathOperatorOptions.length)
      ];
    return symbol;
  };

  //set initial numbers to be used in equation
  const AssignNumbers = (): [number, number] => {
    SymbolSelect();
    let firstNumber: number;
    let secondNumber: number;

    if (symbol === "+" || symbol === "-" || symbol === "x") {
      firstNumber = Math.floor(Math.random() * (maxNumberLength + 1));
      secondNumber = Math.floor(Math.random() * (maxNumberLength + 1));
    } else {
      //to prevent division by zero
      firstNumber = Math.floor(Math.random() * (maxNumberLength + 1)) + 1;
      secondNumber = Math.floor(Math.random() * (maxNumberLength + 1)) + 1;
    }
    numbers[0] = firstNumber;
    numbers[1] = secondNumber;
    return numbers;
  };

  //adjust numbers if needed to account for keeping equations on a 3rd/4th grade level
  const AdjustNumbers = (): [number, number] => {
    AssignNumbers();
    //to not allow for negative results for subtraction and improper fractions for division to math problems switch numbers if first in array is less than second
    if ((symbol === "-" || symbol === "/") && numbers[0] < numbers[1]) {
      const holderOne: number = numbers[0];
      const holderTwo: number = numbers[1];
      numbers[0] = holderTwo;
      numbers[1] = holderOne;
    }
    return numbers;
  };

  //convert previously assigned operator symbol and numbers into equation and solve
  const CreateAnswer = (): number => {
    switch (symbol) {
      case "+":
        return numbers[0] + numbers[1];
      case "-":
        return numbers[0] - numbers[1];
      case "x":
        return numbers[0] * numbers[1];
      case "/":
        return numbers[0] / numbers[1];
      //should never return default
      default:
        return NaN;
    }
  };

  AdjustNumbers();

  return (
    <>
      <div className="equation">
        <div className="problem">
          <p>{numbers[0]}</p>
          <p>
            {symbol === "/" ? <>&divide;</> : <>{symbol}</>} {numbers[1]}
          </p>
        </div>
        <div className="user-answer">
          <AnswerAndCheck solution={CreateAnswer()} />
        </div>
      </div>
    </>
  );
}

export default MathProblem;

import { useContext } from "react";
import { MathPracticeSettingsContext } from "../MathPracticeContext";
import AnswerAndCheck from "./AnswerAndCheck";

function MathProblem() {
  const numbers: [number, number] = [0, 0];
  let symbol: string = "";
  const {
    lengthOfDigitsInProblems: len,
    mathOperatorOptions,
    onlyAllowWholeNumbers,
    allowNegativeAnswers,
  } = useContext(MathPracticeSettingsContext)!;
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

  const AdjustNumbers = (): [number, number] => {
    AssignNumbers();
    //to not allow improper fractions with division, switch numbers if first in array is less than second
    if (symbol === "/" && numbers[0] < numbers[1]) {
      const holderOne: number = numbers[0];
      const holderTwo: number = numbers[1];
      numbers[0] = holderTwo;
      numbers[1] = holderOne;
    }

    //PURPOSE: leaving more comments here so I actually remember what the heck I was doing since this one took a bit more thought due to edge cases

    // to only allow whole number answers for division problems, generate the problem backward to guarantee whole number results while respecting maxNumberLength
    // backward generation: pick divisor first, then multiplier, then calculate dividend = divisor * multiplier
    // this ensures: 1) whole number answer by construction, 2) no recursion needed, 3) both numbers within constraints, 4) problem variety
    if (
      onlyAllowWholeNumbers &&
      symbol === "/"
    ) {
      // determine the cap for the divisor to ensure multiple multiplier options per divisor
      // if len = 1 (only single digits), cap at maxNumberLength / 2 to avoid repetitive same-number-divided-by-itself problems
      // if len >= 2, cap at maxNumberLength / 4 to ensure at least 4 different multipliers are possible
      const divisorCap = len === 1 ? Math.floor(maxNumberLength / 2) : Math.floor(maxNumberLength / 4);
      
      // generate a random divisor between 1 and divisorCap (inclusive)
      const divisor = Math.floor(Math.random() * divisorCap) + 1;
      
      // calculate the maximum multiplier: the largest number we can multiply divisor by without exceeding maxNumberLength
      const maxMultiplier = Math.floor(maxNumberLength / divisor);
      
      // generate a random multiplier between 1 and maxMultiplier (inclusive)
      const multiplier = Math.floor(Math.random() * maxMultiplier) + 1;
      
      // set the dividend (numbers[0]) and divisor (numbers[1])
      // dividend = divisor * multiplier guarantees the result will be a whole number: (divisor * multiplier) / divisor = multiplier
      numbers[0] = divisor * multiplier;
      numbers[1] = divisor;
    }

    //to not allow negative answers in subtraction problems, switch numbers if first in array is less than second
    if (
      allowNegativeAnswers === false &&
      symbol === "-" &&
      numbers[0] < numbers[1]
    ) {
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

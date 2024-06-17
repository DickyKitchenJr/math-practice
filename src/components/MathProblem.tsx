import { useRef } from "react";

function MathProblem() {
  const userAnswer = useRef<HTMLInputElement>(null);
  const numbers: [number, number] = [0, 0];
  let symbol: string = "";

  const handleSubmitAnswer = () => {
    if (userAnswer.current) console.log(userAnswer.current.value);
  };

  //set initial math operator symbol 
  const SymbolSelect = (): string => {
    const symbols: string[] = ["+", "-", "x", "/"];
    const pickSymbol: string = symbols[Math.floor(Math.random() * 4)];
    symbol = pickSymbol;
    return symbol;
  };

  //set initial numbers to be used in equation
  const AssignNumbers = (): [number, number] => {
    SymbolSelect();
    let firstNumber: number;
    let secondNumber: number;

    if (symbol === "+" || symbol === "-") {
      firstNumber = Math.floor(Math.random() * 900001);
      secondNumber = Math.floor(Math.random() * 900001);
    } else if (symbol === "x") {
      firstNumber = Math.floor(Math.random() * 13);
      secondNumber = Math.floor(Math.random() * 13);
    } else {
      firstNumber = Math.floor(Math.random() * 13);
      //to keep division answers to whole numbers
      secondNumber = firstNumber * Math.floor(Math.random() * 13);
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
    //to not allow for division by zero
    if (symbol === "/" && (numbers[0] === 0 || numbers[1] === 0)) {
      numbers[0] = numbers[0] + 2;
      numbers[1] = numbers[1] + 2;
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
          <input type="text" size={5} ref={userAnswer} />
          <button onClick={handleSubmitAnswer}>Submit Answer</button>
        </div>
        
        <p>{CreateAnswer()}</p>
      </div>
    </>
  );
}

export default MathProblem;

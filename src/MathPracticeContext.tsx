import { createContext, useState } from "react";

export const MathPracticeSettingsContext = createContext<
  | {
      numberOfProblems: number;
      lengthOfDigitsInProblems: number;
      mathOperatorOptions: string[];
      setNumberOfProblemsHandler: (num: number) => void;
      setLengthOfDigitsInProblemsHandler: (length: number) => void;
      setMathOperatorOptionsHandler: (operator: string) => void;
      resetSettingsHandler: () => void;
      onlyAllowWholeNumbers: boolean;
      setOnlyAllowWholeNumbersHandler: (allowWholeNumbers: boolean) => void;
      allowNegativeAnswers: boolean;
      setAllowNegativeAnswersHandler: (allowNegatives: boolean) => void;
      includePrintOption: boolean;
      setIncludePrintOptionHandler: (includePrint: boolean) => void;
    }
  | undefined
>(undefined);

export const MathPracticeSettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [numberOfProblems, setNumberOfProblems] = useState(0);
  const [lengthOfDigitsInProblems, setLengthOfDigitsInProblems] = useState(1);
  const [mathOperatorOptions, setMathOperatorOptions] = useState<string[]>([]);
  const [onlyAllowWholeNumbers, setOnlyAllowWholeNumbers] = useState(true);
  const [allowNegativeAnswers, setAllowNegativeAnswers] = useState(false);
  const [includePrintOption, setIncludePrintOption] = useState(false);

  const setNumberOfProblemsHandler = (num: number) => {
    setNumberOfProblems(num);
  };

  const setLengthOfDigitsInProblemsHandler = (length: number) => {
    setLengthOfDigitsInProblems(length);
  };

  const setMathOperatorOptionsHandler = (operator: string) => {
    setMathOperatorOptions((prevOperators) =>
      prevOperators.includes(operator)
        ? prevOperators.filter((eachOp) => eachOp !== operator)
        : [...prevOperators, operator],
    );
  };

  const setOnlyAllowWholeNumbersHandler = (allowWholeNumbers: boolean) => {
    setOnlyAllowWholeNumbers(allowWholeNumbers);
  };

  const setAllowNegativeAnswersHandler = (allowNegatives: boolean) => {
    setAllowNegativeAnswers(allowNegatives);
  };

  const resetSettingsHandler = () => {
    setNumberOfProblems(0);
    setLengthOfDigitsInProblems(1);
    setMathOperatorOptions([]);
    setOnlyAllowWholeNumbers(true);
    setAllowNegativeAnswers(false);
  };

  const setIncludePrintOptionHandler = (includePrint: boolean) => {
    setIncludePrintOption(includePrint);
  };

  return (
    <MathPracticeSettingsContext.Provider
      value={{
        numberOfProblems,
        lengthOfDigitsInProblems,
        mathOperatorOptions,
        setNumberOfProblemsHandler,
        setLengthOfDigitsInProblemsHandler,
        setMathOperatorOptionsHandler,
        resetSettingsHandler,
        includePrintOption,
        setIncludePrintOptionHandler,
        onlyAllowWholeNumbers,
        setOnlyAllowWholeNumbersHandler,
        allowNegativeAnswers,
        setAllowNegativeAnswersHandler,
      }}
    >
      {children}
    </MathPracticeSettingsContext.Provider>
  );
};

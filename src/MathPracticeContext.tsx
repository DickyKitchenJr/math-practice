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

  const resetSettingsHandler = () => {
    setNumberOfProblems(0);
    setLengthOfDigitsInProblems(1);
    setMathOperatorOptions([]);
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
      }}
    >
      {children}
    </MathPracticeSettingsContext.Provider>
  );
};

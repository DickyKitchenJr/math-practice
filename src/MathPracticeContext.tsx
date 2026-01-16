import { createContext, useState } from "react";

export const MathPracticeSettingsContext = createContext<
  | {
      numberOfProblems: number;
      lengthOfDigitsInProblems: number;
      setNumberOfProblemsHandler: (num: number) => void;
      setLengthOfDigitsInProblemsHandler: (length: number) => void;
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

  const setNumberOfProblemsHandler = (num: number) => {
    setNumberOfProblems(num);
  };

  const setLengthOfDigitsInProblemsHandler = (length: number) => {
    setLengthOfDigitsInProblems(length);
  };

  return (
    <MathPracticeSettingsContext.Provider
      value={{
        numberOfProblems,
        lengthOfDigitsInProblems,
        setNumberOfProblemsHandler,
        setLengthOfDigitsInProblemsHandler,
      }}
    >
      {children}
    </MathPracticeSettingsContext.Provider>
  );
};

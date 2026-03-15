import { useState } from "react";

type AnswerAndCheckProps = {
  solution: number;
};

const AnswerAndCheck: React.FC<AnswerAndCheckProps> = ({ solution }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  //sets user's answer
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setUserAnswer(value);
  };

  //checks if answer is correct or not after user clicks submit
  const handleSubmitAnswer = () => {
    setAnswerSubmitted(true);
    if (Number(userAnswer) === solution) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerWrong(true);
    }
  };

  return (
    <>
      <input
        type="text"
        size={5}
        onChange={handleUserInput}
        disabled={answerSubmitted}
      />
      <button onClick={handleSubmitAnswer} disabled={answerSubmitted}>
        Submit Answer
      </button>
      {isAnswerCorrect ? <p>CORRECT!!!</p> : null}
      {isAnswerWrong ? (
        <>
          <p>Wrong.</p>
          <p> Correct Answer = {solution}</p>
        </>
      ) : null}
    </>
  );
};

export default AnswerAndCheck;

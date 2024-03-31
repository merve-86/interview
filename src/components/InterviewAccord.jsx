import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";
const InterviewAccord = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="question-answer-card">
      <h2 className="question">
        {question.question.toUpperCase()}
        <span onClick={handleClick}>{showAnswer ? arrowup : arrowdown}</span>
      </h2>
      <div className="answer">{showAnswer && <p>{question.answer}</p>}</div>
    </div>
  );
};
export default InterviewAccord;





// import { useState } from "react";
// import { arrowdown, arrowup } from "../helper/icons";

// const InterviewAccord = ({ question }) => {
//   const [showAnswer, setShowAnswer] = useState(false);

//   const handleClick = () => {
//     setShowAnswer(!showAnswer)
//   };

//     return showAnswer ? (
//       <div className="card">
//         <h2 className="question">
//           {question.question.toUpperCase()}{" "}
//           <span onClick={handleClick}>{showAnswer ? arrowup : arrowdown}</span>
//         </h2>
//         <div className="answer">{question.answer}</div>
//       </div>
//     ) : (
//       <h2>
//         {question.question} <span onClick={handleClick}>{showAnswer ? arrowup : arrowdown}</span>
//       </h2>
//     )
// };

// export default InterviewAccord;

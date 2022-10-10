import React from "react";

const Question = ({ quiz_question }) => {
  const { options, correctAnswer, id, question } = quiz_question;

  const newQuestion = question.replace(/(<([^>]+)>)/gi, "");
  return (
    <div>
      <p className="font-bold">Q. {newQuestion}</p>
      {Object.values(options).map((value, index) => {
        return (
          <div key={index}>
            <p>
              {index + 1}.{value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Question;

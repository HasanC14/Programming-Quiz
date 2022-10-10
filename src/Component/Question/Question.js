import React from "react";

const Question = ({ quiz_question }) => {
  console.log(quiz_question);
  const { options, correctAnswer, id, question } = quiz_question;
  //   console.log(options);
  const strOptions = JSON.stringify(options);
  //   console.log(strOptions);
  const newOptions = strOptions.replace(/(<([^>]+)>)/gi, "");
  return (
    <div>
      <p className="font-bold">question{question}</p>
      {/* <p>{newOptions}</p> */}
      {/* <p>{strOptions}</p> */}
      {/* {(options.map = (option) => console.log(option))} */}
    </div>
  );
};

export default Question;

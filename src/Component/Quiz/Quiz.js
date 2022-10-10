import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const LoadData = useLoaderData();
  const { questions } = LoadData.data;
  return (
    <div>
      {questions.map((quiz_question) => (
        <Question
          key={quiz_question.id}
          quiz_question={quiz_question}
        ></Question>
      ))}
    </div>
  );
};

export default Quiz;

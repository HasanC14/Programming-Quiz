import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Question.css";

const Question = ({ quiz_question }) => {
  const { options, correctAnswer, id, question } = quiz_question;
  const [option, setOption] = useState();
  const newQuestion = question.replace(/(<([^>]+)>)/gi, "");
  const Correct = () => {
    // toast(`${option} is a Correct Answer`);
    const customId = "custom-id-yes";
    toast("Correct Answer", {
      toastId: customId,
    });
  };
  return (
    <div>
      <p className="font-bold md:text-3xl sm:text-2xl mt-5 mb-5">
        Q. {newQuestion}
      </p>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 sm:m-10 md:m-20 ">
        {Object.values(options).map((value, index) => {
          return (
            <div className="rounded border border-gray-200 p-10 ">
              <input
                type="radio"
                id="bordered-radio-1"
                value={value}
                name={option}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                onChange={(e) => setOption(e.target.value)}
              />
              <label
                htmlFor="bordered-radio-1"
                className="py-4 ml-2 w-full font-medium text-gray-900 md:text-2xl sm:text-xl"
              >
                {index + 1}.{value}
              </label>
            </div>
          );
        })}
      </div>

      {option === correctAnswer ? Correct() : ""}
      <ToastContainer />
    </div>
  );
};

export default Question;

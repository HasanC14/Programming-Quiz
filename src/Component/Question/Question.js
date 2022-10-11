import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ quiz_question }) => {
  const { options, correctAnswer, id, question } = quiz_question;
  const [option, setOption] = useState([]);
  const newQuestion = question.replace(/(<([^>]+)>)/gi, "");
  const Correct = () => {
    const Id = "id";
    toast("Correct Answer Try next one", {
      autoClose: 2000,
      toastId: Id,
      theme: "dark",
    });
  };
  const Incorrect = () => {
    const Id = "id";
    toast("Incorrect Answer Try Again", {
      autoClose: 2000,
      toastId: Id,
      theme: "dark",
    });
  };
  const Select = () => {
    const Id = "id";
    toast("Click on the Check Mark to see the Correct Answer", {
      autoClose: 2500,
      toastId: Id,
      theme: "dark",
    });
  };
  const DisplayCorrectAns = () => {
    toast(`Correct Answer: ${correctAnswer}`, {
      position: "top-center",
      autoClose: 2500,
      theme: "dark",
    });
  };

  return (
    <div>
      <div className="question_icon">
        <p className="font-bold md:text-3xl sm:text-2xl mt-5 mb-5">
          Q. {newQuestion}{" "}
          <button onClick={DisplayCorrectAns}>
            <FontAwesomeIcon icon={faSquareCheck} />
          </button>
        </p>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 sm:m-10 md:m-20 ">
        {Object.values(options).map((value, index) => {
          return (
            <div className="rounded-lg border border-gray-300 p-10 hover:bg-violet-200 ease-in-out">
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
                className="py-4 ml-2 w-full  font-medium text-gray-900 md:text-2xl sm:text-xl"
              >
                {index + 1}.{value}
              </label>
            </div>
          );
        })}
      </div>
      {option === correctAnswer ? Correct() : ""}
      {(() => {
        if (option.length !== 0) {
          return option !== correctAnswer ? Incorrect() : "";
        } else {
          return Select();
        }
      })()}
      <ToastContainer />
    </div>
  );
};

export default Question;

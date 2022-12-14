import React from "react";
import "./Topic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Topic = ({ topic }) => {
  const { logo, name, total, id } = topic;
  return (
    <div className="card grid grid-cols-1 p-10 rounded-lg">
      <div className="card-img flex justify-center align-middle">
        <img src={logo} alt="topic-img" className="w-48" />
      </div>
      <div className="card-details mt-5">
        <div>
          <div className="card-text text-center">
            <p className="text-5xl">{name}</p>
            <p className="md:text-2xl">Total {total} Quizzes</p>
          </div>
          <div className="card-button mt-5 ">
            <Link to={`/quiz/${id}`}>
              <p className="btn p-3 rounded-lg text-center">
                Start Quiz
                <FontAwesomeIcon icon={faPlayCircle} />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;

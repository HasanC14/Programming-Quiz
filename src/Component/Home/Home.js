import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const LoadTopics = useLoaderData();
  const Topics = LoadTopics.data;
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 m-10 gap-4">
      {Topics.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Home;

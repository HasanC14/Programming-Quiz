import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Topic from "../Topic/Topic";

const Home = () => {
  const LoadTopics = useLoaderData();
  const Topics = LoadTopics.data;
  return (
    <div>
      <section>
        <Header></Header>
      </section>
      <div className="grid md:grid-cols-2 grid-cols-1 m-10 gap-14">
        {Topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;

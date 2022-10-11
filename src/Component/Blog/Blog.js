import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="container">
      <div className="m-10">
        <div className="Ques p-10 rounded-lg">
          <p className="md:text-4xl font-bold">
            Whats the purpose of react router?
          </p>
          <p className="md:text-2xl ">
            At its heart, React Router is a state container for the current
            location , or URL. It keeps track of the location and renders
            different Routes as it changes, and it also gives you tools to
            update the location using Links and the history API.
          </p>
        </div>
      </div>

      <div className="m-10">
        <div className="Ques p-10 rounded-lg">
          <p className="md:text-4xl font-bold">
            What is ref and useRef in React JS?
          </p>
          <p className="md:text-2xl">
            A ref is defined as any value that does not trigger a component
            re-render when it is changed. This behavior is contrary to the
            function of states and props. A ref can be created in two ways- by
            the useRef hook or by the createRef function. useRef: The useRef is
            a hook that uses the same ref throughout.
          </p>
        </div>
      </div>
      <div className="m-10">
        <div className="Ques p-10 rounded-lg">
          <p className="md:text-4xl font-bold">How does context API work?</p>
          <p className="md:text-2xl">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

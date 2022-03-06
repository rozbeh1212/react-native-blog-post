import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogost":
      return [
        ...state,
        {
          id: math.random() * 1000000,
          title: `Blog Post ${state.lenght + 1}`
        },
      ];

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogost" });
  };
};

export const { Context, Provider } = createContext(
  blogReducer,
  { addBlogPost },
  []
);

import React from "react";
import Auth from "../Auth";

const store = {
  name: "Luispa",
  appTitle: "Vanquish",
  // location: document.location.pathname.replace(/^\/?|\/$/g, ''),
  auth: new Auth(),
};

const Context = React.createContext();

let ContextOne = React.createContext();

let initialState = {
  count: 10,
  currentColor: "#bada55",
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "set-color":
      return { ...state, currentColor: action.payload };
    default:
      return { ...state };
  }
};

function ContextOneProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  // [B]
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer, Context, store };

// https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68
// We have some new faces here, eh? 90% of the code is quite familiar, let's examine items [A], [B], [C].

// [A]: We're using the new React Hooks API here, called useReducer. If you’re familiar with Redux, you already know how this works.
// It will return the state object and a dispatch function to send updates to the store state.We're creating a value object with both
// and we'll send it to our item[B].

// [B]: Here, we're using our context provider to inject the value object, making it available to all consumers. Previously we saw that
// we're using it to wrap our <App /> in ./src/index.js, meaning, all children components from <App /> would be able to pull out this context to use.

// [C]: At first look, this export is odd.We're exporting the default context object created by React, ContextOne, our custom provider,
// ContextOneProvider and an alias to the consumer key, ContextOneConsumer.To use the new Reactk Hooks API for context, called useContext,
// we need to pass the default object created by React, our first export.The second export, ContextOneProvider, is our custom provider,
// where we need to use it to inject what we want in our app context.The last export, ContextOneConsumer, is just a convenience to
// subscribe to context changes, this is a stable feature from React.

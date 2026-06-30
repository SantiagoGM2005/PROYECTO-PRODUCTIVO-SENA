import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import {store, persistor} from "./Redux/store"
import App from './App'
import{Provider} from "react-redux";
import{ PersistGate} from "redux-persist/es/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
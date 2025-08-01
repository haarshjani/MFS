import React from "react";
import ReactDOM from "react-dom/client";
import Transections from "./Transections";


const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<Transections />);
}
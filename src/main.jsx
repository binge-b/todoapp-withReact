import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import React from 'react'
// import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import { Todo } from './Todo';

const rootElement = document.getElementById("root")
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
)

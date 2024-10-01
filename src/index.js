import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Header from "./widgets/Header"
import Main from "./pages/Main"
import QuickStart from "./pages/QuickStart"
import TicTacToe from "./pages/TicTacToe"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Main />} />
      <Route path="/quickstart" element={<QuickStart />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
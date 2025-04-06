import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Header from "./widgets/Header";
import Main from "./pages/Main";
import QuickStart from "./pages/QuickStart";
import TicTacToe from "./pages/TicTacToe/TicTacToe";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="react-documentation">
            <Route
                path="/react-documentation"
                element={<Main />}
            />
            <Route
                path="quickstart"
                element={<QuickStart />}
            />
            <Route
                path="tic-tac-toe"
                element={<TicTacToe />}
            />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router} />
    </React.StrictMode>
);

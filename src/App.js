import React from "react";
// import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const HomePage = React.lazy(() => import("HomePage/HomePage"));

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Hello PokeFederations (web-app)</div>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;

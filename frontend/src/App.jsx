import React from "react";
import { Route, Routes } from "react-router";
import HomePags from "./pages/HomePags.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailsPage from "./pages/NoteDetailsPage.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePags />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

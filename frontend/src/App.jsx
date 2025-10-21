import React from "react";
import { Route, Routes } from "react-router";
import HomePags from "./pages/HomePags.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailsPage from "./pages/NoteDetailsPage.jsx";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      <button onClick={() => toast.success("siuccccccccccccc")}>
        notification
      </button>
      <Routes>
        <Route path="/" element={<HomePags />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RateLimit from "../components/RateLimit";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
function HomePags() {
  const [isRateLimit, setIsRateLimit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes");
        // console.log(res.data);

        setNotes(res.data);
        console.log(notes);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching notes:", error);
        if (error.response.status === 429) {
          setIsRateLimit(true);
        } else {
          toast.error("Failed to fetch notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      {isRateLimit && <RateLimit />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <p className="text-center text-primary py-10">Loading notes...</p>
        )}
        {
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => {
              return <NoteCard key={note._id} note={note} />;
            })}
          </div>
        }
      </div>
    </div>
  );
}

export default HomePags;

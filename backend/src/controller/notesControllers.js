import Note from "../../models/Notes.js";
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find({});
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);

    res.status(500).json({ message: "Server Error" });
  }
}
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error creating note:", error);

    res.status(500).json({ message: "Server Error" });
  }
}
export async function updateNote(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Server Error" });
  }
}

export async function deleteNote(req, res) {
  const id = req.params.id;
  try {
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Server Error" });
  }
}

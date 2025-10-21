import express from "express";
import {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
} from "../controller/notesControllers.js";
const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);
export default router;

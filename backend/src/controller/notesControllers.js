import express from "express";
export function getAllNotes(req, res) {
  res.status(200).send("This is some data from the backend!");
}
export function createNote(req, res) {
  res.status(201).json({ message: "Data created successfully" });
}
export function updateNote(req, res) {
  res.status(200).json({ message: "Data updated successfully" });
}
export function deleteNote(req, res) {
  res.status(200).json({ message: "Data deleted successfully" });
}

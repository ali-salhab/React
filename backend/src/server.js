import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // <-- parses JSON request bodies
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use("/api/notes", notesRoutes);
console.log(process.env.PORT);

// middleware to parse JSON bodies
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server start at port 😏😏😏😏😏😉" + PORT);
});
export default app;

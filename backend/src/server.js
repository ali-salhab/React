import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
connectDB();
app.use("/api/notes", notesRoutes);
console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server start at port 😏😏😏😏😏😉" + PORT);
});
export default app;

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "config/db.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

// middleware
// cors
app.use(cors());
// body parser->req.body
app.use(express.json());
app.use((req, res, next) => {
  console.log(`request :  ${req.method} url : ${req.url}`);
  next();
});
// urlencoded
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("server start at port 😏😏😏😏😏😉" + PORT);
});
export default app;

// rate limiting
// 429 too many requests

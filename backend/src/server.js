import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import ratelimiter from "./middleware/rateLimiter.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

// middleware
// cors
app.use(cors());
// body parser->req.body
app.use(express.json());

// urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(ratelimiter);

app.use("/api/notes", notesRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server start at port 😏😏😏😏😏😉" + PORT);
  });
});

export default app;

// rate limiting
// 429 too many requests

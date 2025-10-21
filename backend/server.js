import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/notes", (req, res) => {
  res.status(200).send({ message: "This is some data from the backend!" });
});
app.post("/api/notes", (req, res) => {
  console.log("post request");
  console.log(req.body.data);

  res.status(201).json({ message: "This is some data from the backend!" });
});
app.put("/api/notes", (req, res) => {
  res.status(200).json({ message: "This is some data from the backend!" });
});
app.delete("/api/notes", (req, res) => {
  res.json({ message: "This is some data from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;

// status code 2xx - success
// status code 1xx - informational
// status code 201 - created
// status code 204 - no content
// status code 301 - moved permanently
// status code 302 - moved temporarily

// 200 - OK
// status code 3xx - redirection
// status code 4xx - client error
// status code 5xx - server error
// GET - to read data
// POST - to create data
// PUT - to update data
// DELETE - to delete data

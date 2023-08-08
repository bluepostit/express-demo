import express from "express";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

const aboutData = {
  name: "Cool Company",
  description: "We do things well and make a difference",
  established: 2000,
};

app.get("/", (req, res) => {
  console.log("got a request for /");
  // res.send("Hi there, everyone!");

  // Find the file index.html in this directory, and send it.
  const dirName = path.dirname(new URL(import.meta.url).pathname);
  res.sendFile(path.join(dirName, "/index.html"));
});

app.get("/api/about", (req, res) => {
  res.json(aboutData);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

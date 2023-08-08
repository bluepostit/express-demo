import express from "express";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

const aboutData = {
  name: "Cool Company",
  description: "We do things well and make a difference",
  established: 2000,
};

const staffData = ["sally", "mike", "rachel", "john"];

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

app.get("/api/staff", (req, res) => {
  res.json({
    data: staffData,
  });
});

app.get("/api/staff/:employee", (req, res) => {
  console.log("params I got:", req.params);
  const employee = req.params.employee;
  if (staffData.includes(employee)) {
    res.json({
      data: `${employee} is a valued employee at our company`,
    });
  } else {
    res.status(404).json({
      error: "Not found",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

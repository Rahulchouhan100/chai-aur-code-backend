require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/v1/jokes", (req, res) => {
  const jokes = [
    {
      id: "1",
      title: "haha",
    },
    {
      id: "2",
      title: "mat haso itna",
    },
    {
      id: "3",
      title: "mat haso itna",
    },
  ];
  res.send(jokes);
});

app.get("/dashboard", (req, res) => {
  res.json({
    name: "rahul",
    isSingle: true,
  });
});

app.listen(process.env.PORT || 3001, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);

import express from "express";
import path from "path";

const __dirname = path.resolve();

const PORT = process.env.PORT ?? 5050;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(PORT, () =>
  console.log(`Server has been started on port ${PORT}...`)
);
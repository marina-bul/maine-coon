import express from "express";
import path from "path";
import router from "./routes/router.js";

const __dirname = path.resolve();

const PORT = process.env.PORT ?? 5050;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "templates"));

app.use(express.static(path.resolve(__dirname, "src")));

app.get("/", (req, res) => {
  res.render("main");
});

app.use(router);

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "src", "index.html"));
// });

app.listen(PORT, () =>
  console.log(`Server has been started on port ${PORT}...`)
);

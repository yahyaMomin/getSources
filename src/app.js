import express from "express";
import routes from "./routes/routes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/v1", routes);

export default app;

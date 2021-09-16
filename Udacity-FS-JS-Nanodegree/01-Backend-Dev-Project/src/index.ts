import express from "express";
import routes from "./routes/api/index";

const app = express();
const port = 3000;

//use routes middleware
app.use("/api/images", routes);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

//start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;

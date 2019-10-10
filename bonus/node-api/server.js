import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bowlingRoutes from "./routes/bowling.server.routes";

process.on("SIGINT", function() {
  console.log("SIGINT received. Shutting down");
  process.exit();
});

process.on("SIGTERM", function() {
  console.log("SIGTERM received. Graceful shutdown");
  process.exit();
});

let app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/healthy', (req, res) =>  res.send("healthy"));

bowlingRoutes(app);

app.listen(port);

console.log(`Listening on port: ${port}`);

export default app;

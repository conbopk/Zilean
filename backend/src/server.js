import express from "express"
import {ENV} from "./lib/env.js";
import * as path from "node:path";


const app = express();

const __dirname = path.resolve();

// Middleware
app.use(express.json());


app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Api is up and running" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


app.listen(ENV.PORT, () => console.log("Server is running on port", ENV.PORT));
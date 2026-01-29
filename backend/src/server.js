import express from "express"
import {ENV} from "./lib/env.js";


const app = express();

// Middleware
app.use(express.json());


app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Api is up and running" });
});

app.listen(ENV.PORT, () => console.log("Server is running on port", ENV.PORT));
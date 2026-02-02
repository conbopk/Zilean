import express from "express"
import cors from "cors";
import {ENV} from "./lib/env.js";
import * as path from "node:path";
import {connectDB} from "./lib/db.js";
import {serve} from "inngest/express";
import {functions, inngest} from "./inngest/index.js";
import {handleClerkWebhook} from "./routes/webhooks.js";
import {clerkMiddleware} from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";


const app = express();

const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());
app.use("/api/inngest", serve({ client: inngest, functions }));

// routes
app.post('/api/webhooks/clerk', handleClerkWebhook);    // webhook for dev env
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/api/health", (req, res) => {
    res.status(200).json({message: "Api is up and running"});
});

if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => console.log("Server is running on port", ENV.PORT));
    } catch (e) {
        console.error("Error starting the server", e);
    }
};

void startServer();

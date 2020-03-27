import express from "express";
import bunyan from "bunyan";
import { config } from "dotenv";
config();

import thumbnail from "./routes/thumbnail";
import patch from "./routes/patch";
import auth from "./routes/auth";

const app = express();

const log = bunyan.createLogger({
  name: "app"
});

// Init Middleware
app.use(express.json());

// Enable proxy x-Forwadded-*
app.enable("trust proxy");

// Routes

/**
 * User authentication
 */
app.use("/api", auth);

/**
 * JSON Patching
 */
app.use("/api", patch);

/**
 * Thumbnail Generator
 */
app.use("/api", thumbnail);

// Set port
app.set("port", process.env.PORT);

// Initialize server
app.listen(app.get("port"), err => {
  if (err) {
    log.info(err.message);
  } else {
    log.info(`Server is running on port ${app.get("port")}`);
  }
});

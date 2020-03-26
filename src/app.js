import express from "express";
import bunyan from "bunyan";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const log = bunyan.createLogger({
  name: "app"
});

// Init Middleware
app.use(express.json());

// Enable proxy x-Forwadded-*
app.enable("trust proxy");

// Set port
app.set("port", process.env.PORT || 5000);

// Initialize server
app.listen(app.get("port"), err => {
  if (err) {
    log.info(err.message);
  } else {
    log.info(`Server is running on port ${app.get("port")}`);
  }
});

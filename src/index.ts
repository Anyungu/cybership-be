import express, { Response, Request, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { orderRouter } from "./api/v1/routes/order";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/api", cors<cors.CorsRequest>(), express.json(), orderRouter);

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({
    error: {
      message: error.message,
    },
  });
});

app.use("*", (_req: Request, res: Response) => {
  const error = new Error("Not Found");
  error.message = "Invalid Route";
  res.status(404).json({
    error: {
      message: error.message,
    },
  });
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });

console.log(`🚀 Server ready at http://localhost:${PORT}/`);

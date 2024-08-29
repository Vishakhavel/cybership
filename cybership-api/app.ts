import express from "express";
import cors from "cors";

import orderRoutes from "./routes/orderRoute";

const app = express();

app.use(express.json());

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Change this to your Next.js app URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Use the routes
app.use("/api", orderRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

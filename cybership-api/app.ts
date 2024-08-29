import express from "express";
import orderRoutes from "./routes/orderRoute";

const app = express();

app.use(express.json());

// Use the routes
app.use("/api", orderRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

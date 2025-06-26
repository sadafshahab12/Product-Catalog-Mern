import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { productRouter } from "./routes/productRoute.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({origin : process.env.FRONT_END_URL}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Product catalogue");
});
app.use("/api", productRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

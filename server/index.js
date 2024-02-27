import express from "express";
import { router as postRouter } from "./routes/post.route.js";
import cors from "cors";
const PORT = 4000;
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use("/uploads", express.static("./uploads"));
app.use("/post", postRouter);
app.listen(PORT, () => console.log("server is listening"));

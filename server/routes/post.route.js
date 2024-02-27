import express from "express";
export const router = express.Router();
import multer from "multer";
import { uploadController } from "../controllers/post.controllers.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const uploadImg = multer({
  storage: storage,
}).array("image", 2);



router.post("/uploads", uploadImg, uploadController);

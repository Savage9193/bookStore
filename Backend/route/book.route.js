import express from "express";
import { getBook } from "../controller/book.controller.js";

import { get } from "mongoose";

const router=express.Router();
router.get("/book",getBook);


export default router;
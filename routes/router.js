import { Router } from "express";
import { getReviews } from "../controllers/reviews.js";

const router = Router();

router.get("/api/reviews", getReviews);

export default router;

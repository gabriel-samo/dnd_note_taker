import { Router } from "express";
import db from "../../db";

const router = Router();

// GET /api/notes/
router.get("/", async (req, res, next) => {
  try {
    const results = await db.notes.all();
    res.json(results);
  } catch (error) {
    next(error);
  }
});

export default router;

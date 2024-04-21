import { Router } from "express";

const router = Router();

// GET /api/notes/
router.get("/", (req, res, next) => {
  try {
    res.json("get all notes");
  } catch (error) {
    next(error);
  }
});

export default router;

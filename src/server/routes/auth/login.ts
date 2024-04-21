import { Router } from "express";

const router = Router();

// POST /auth/login/
router.post("/", (req, res, next) => {
  res.json(req.body);
});

export default router;

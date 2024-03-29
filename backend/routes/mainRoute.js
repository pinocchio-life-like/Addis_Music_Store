import {
  getMusics,
  getSearchResults,
  addMusic,
} from "../controllers/Controller.js";
import express from "express";
const router = express.Router();

// express router method to create route for getting all users
router.route("/").get(getMusics);
router.post("/music", addMusic);
router.get("/searchMusic", getSearchResults);

// express router method to create route for getting users by id
// router.route("/:id").get(getUserById);

export default router;

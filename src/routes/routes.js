import express from "express";
import { getEpisodes, getServers, getSources } from "../extractor/extractor.js";

const router = express.Router();

router.get("/episodes/:id", getEpisodes);

router.get("/servers", getServers);
router.get("/sources", getSources);

export default router;

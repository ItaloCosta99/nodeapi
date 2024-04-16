const express = require("express");
const { createPost, getPosts } = require("../controllers/post");
const { createPostValidator } = require("../helpers");

const router = express.Router();

router.get("/", getPosts);
router.post("/post", createPostValidator, createPost);

module.exports = router;

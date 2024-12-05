const express = require('express');
const Article = require('../model/article'); 

const router = express.Router();

// POST route to add an article
router.post('/', async (req, res) => {
  const { title, categories, tags } = req.body;
  const article = new Article({ title, categories, tags });
  console.log('article', article);
  await article.save();
  res.json({ success: true, article });
});

// GET route to fetch all articles
router.get('/', async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

module.exports = router;

const mongoose = require('mongoose');

// Define schema and model
const articleSchema = new mongoose.Schema({
  title: String,
  categories: [String],
  tags: [String],
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

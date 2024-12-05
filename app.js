const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/articles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));


// Define schema and model
const articleSchema = new mongoose.Schema({
  title: String,
  categories: [String],
  tags: [String],
});
const Article = mongoose.model('Article', articleSchema);

// API routes
app.post('/articles', async (req, res) => {
  const { title, categories, tags } = req.body;
  const article = new Article({ title, categories, tags });
  console.log('article', article)
  await article.save();
  res.json({ success: true, article });
});

app.get('/articles', async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
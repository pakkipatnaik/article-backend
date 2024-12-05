const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const articleRoutes = require('./routes/article');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/articles', articleRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/articles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
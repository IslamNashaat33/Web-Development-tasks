const express = require("express");
const app = express();

/* Middleware to parse JSON body */
app.use(express.json());

/* In-memory storage */
let posts = [];
let nextId = 1;

/* -----------------------------------
   GET /posts
   Returns all posts
----------------------------------- */
app.get("/posts", (req, res) => {
  res.json(posts);
});

/* -----------------------------------
   GET /posts/:id
   Returns a single post
----------------------------------- */
app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
});

/* -----------------------------------
   POST /posts
   Create a new post
----------------------------------- */
app.post("/posts", (req, res) => {
  const { author, content } = req.body;

  if (!author || !content) {
    return res.status(400).json({ message: "Author and content are required" });
  }

  const newPost = {
    id: nextId++,
    author,
    content,
    likes: 0,
    createdAt: new Date()
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

/* -----------------------------------
   DELETE /posts/:id
   Delete a post
----------------------------------- */
app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  posts.splice(index, 1);
  res.json({ message: "Post deleted successfully" });
});

/* -----------------------------------
   POST /posts/:id/like
   Like a post
----------------------------------- */
app.post("/posts/:id/like", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  post.likes += 1;
  res.json(post);
});

/* -----------------------------------
   Server start
----------------------------------- */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

const express = require("express");
const Course = require("../models/course");

const router = express.Router();

/* -------------------------
   CREATE course
------------------------- */
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* -------------------------
   READ all courses
------------------------- */
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

/* -------------------------
   READ one course
------------------------- */
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course)
      return res.status(404).json({ message: "Course not found" });

    res.json(course);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

/* -------------------------
   UPDATE course
------------------------- */
router.put("/:id", async (req, res) => {
  try {
    const result = await Course.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.json(result);
  } catch {
    res.status(400).json({ message: "Update failed" });
  }
});

/* -------------------------
   DELETE course
------------------------- */
router.delete("/:id", async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.params.id });
    res.json({ message: "Course deleted" });
  } catch {
    res.status(400).json({ message: "Delete failed" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Joi = require("joi");

const courses = [
    { id: 1, name: "Course1" },
    { id: 2, name: "Course2" },
    { id: 3, name: "Course3" },
  ];
  

const validateCourse = (course) => {
    const schema = {
      name: Joi.string().min(3).required(),
    };
  
    return Joi.validate(course, schema);
  };

  
  router.get("/", (req, res) => {
    res.send(courses);
  });

  router.post("/", (req, res) => {
  const {error} = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    const course = {
      id: courses.length + 1,
      name: req.body.name,
    };
    courses.push(course);
    res.send(course);
    console.log(req.body)
  
  });
  
  router.get("/:id", (req, res) => {
    const course = courses.find((e) => e.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course Not available for given the id");
    res.send(course);
  });

  router.put("/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course not found for a give ID");
  
    const {error} = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    course.name = req.body.name
    res.send(courses)
  })
  
  router.delete("/:id",(req,res)=>{
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course not found for a give ID");
  
    const index = courses.indexOf(course)
  courses.splice(index,1)
  res.send(course)
  })
  

  module.exports = router;
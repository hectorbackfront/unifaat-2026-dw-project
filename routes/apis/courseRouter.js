const { Router } = require("express");

const ListCourseController = require("../app/Controllers/CourseApi/ListCourseController");
const GetCourseController = require("../app/Controllers/CourseApi/GetCourseController");
const CreateCourseController = require("../app/Controllers/CourseApi/CreateCourseController");
const UpdateCourseController = require("../app/Controllers/CourseApi/UpdateCourseController");
const DeleteCourseController = require("../app/Controllers/CourseApi/DeleteCourseController");

const courseRouter = Router();

courseRouter.get("/courses", ListCourseController);
courseRouter.post("/courses", CreateCourseController);
courseRouter.get("/courses/:id", GetCourseController);
courseRouter.put("/courses/:id", UpdateCourseController);
courseRouter.delete("/courses/:id", DeleteCourseController);

module.exports = courseRouter;

const CourseModel = require("../../Models/CourseModel");

const ListCourseController = async (req, res) => {
  try {
    const courses = await CourseModel.findAll();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar cursos.", details: error.message });
  }
};

module.exports = ListCourseController;

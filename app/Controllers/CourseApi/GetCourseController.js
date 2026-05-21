const CourseModel = require("../../Models/CourseModel");

const GetCourseController = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await CourseModel.findByPk(id);

    if (!course) {
      return res.status(404).json({ error: "Curso não encontrado." });
    }

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar curso.", details: error.message });
  }
};

module.exports = GetCourseController;

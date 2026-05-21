const CourseModel = require("../../Models/CourseModel");

const UpdateCourseController = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await CourseModel.findByPk(id);

    if (!course) {
      return res.status(404).json({ error: "Curso não encontrado." });
    }

    await course.update(req.body);

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar curso.", details: error.message });
  }
};

module.exports = UpdateCourseController;

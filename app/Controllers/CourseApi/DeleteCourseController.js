const CourseModel = require("../../Models/CourseModel");

const DeleteCourseController = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await CourseModel.findByPk(id);

    if (!course) {
      return res.status(404).json({ error: "Curso não encontrado." });
    }

    await course.destroy();

    return res.status(200).json({ message: "Curso excluído com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir curso.", details: error.message });
  }
};

module.exports = DeleteCourseController;

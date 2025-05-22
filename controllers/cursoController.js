const Curso = require('../models/curso');


exports.findAll = async (req, res) => {
  const cursos = await Curso.findAll();
  res.render('cursos/index', { cursos });
};

exports.create = async (req, res) => {
  const { nome } = req.body;
  await Curso.create(nome);
  res.redirect('/alunos');
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  await Curso.update(id, nome);
  res.redirect('/alunos');
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Curso.delete(id);
  res.redirect('/alunos');
};


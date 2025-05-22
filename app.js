const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

    const userRoutes = require('./routes/userRoutes');
    const alunoRoutes = require('./routes/alunos');
    const cursoRoutes = require('./routes/cursos');
    const professorRoutes = require('./routes/professores');

    app.use('/users', userRoutes);
    app.use('/alunos', alunoRoutes);
    app.use('/cursos', cursoRoutes);
    app.use('/professores', professorRoutes);

app.get('/', (req, res) => {
  res.redirect('/alunos');
});

app.get('/', (req, res) => {
  res.redirect('/cursos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const cursosRoutes = require('./routes/cursos');
app.use('/cursos', cursosRoutes);

const professoresRoutes = require('./routes/professores');
app.use('/professores', professoresRoutes);
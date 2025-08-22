const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const indexRoutes = require('./routes/index');
const studentRoutes = require('./routes/students');
const teacherRoutes = require('./routes/teachers');
const busRoutes = require('./routes/buses');
const attendanceRoutes = require('./routes/attendance');
const feesRoutes = require('./routes/fees');
const salaryRoutes = require('./routes/salary');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/buses', busRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/fees', feesRoutes);
app.use('/salary', salaryRoutes);

app.listen(port, () => {
  console.log(`School Management System running at http://localhost:${port}`);
});

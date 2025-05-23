const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // ignore l'en-tête
      const fields = {};

      for (const line of students) {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      const output = [`Number of students: ${students.length}`];
      for (const [field, names] of Object.entries(fields)) {
        output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(output.join('\n'));
    });
  });
}

// Route /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route /students
app.get('/students', async (req, res) => {
  const filePath = process.argv[2];
  let responseText = 'This is the list of our students\n';

  try {
    const studentsList = await countStudents(filePath);
    responseText += studentsList;
    res.set('Content-Type', 'text/plain');
    res.send(responseText);
  } catch (err) {
    res.set('Content-Type', 'text/plain');
    res.send(err.message);
  }
});

app.listen(port);

module.exports = app;

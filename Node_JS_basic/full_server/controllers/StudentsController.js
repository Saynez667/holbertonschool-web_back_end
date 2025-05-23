import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv[2];

    readDatabase(path)
      .then((fields) => {
        const response = ['This is the list of our students'];
        for (const field of Object.keys(fields).sort()) {
          const list = fields[field].join(', ');
          response.push(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
        }
        res.status(200).send(response.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(path)
      .then((fields) => {
        const list = fields[major] || [];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;

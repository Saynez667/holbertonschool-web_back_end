import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.trim().split('\n').filter(line => line);
      const students = lines.slice(1);
      const fields = {};

      for (const line of students) {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      resolve(fields);
    });
  });
}

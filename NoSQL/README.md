# NoSQL MongoDB Project 🚀📚

Welcome to the **NoSQL MongoDB** project! This repository will guide you through mastering MongoDB database operations using both MongoDB shell commands and Python with PyMongo. You will learn how to create databases, insert, query, update, and delete documents, as well as perform advanced queries and analyze log data.

---

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- List all MongoDB databases
- Create and use databases and collections
- Insert, update, delete, and query documents using MongoDB shell and Python
- Use PyMongo to interact with MongoDB from Python scripts
- Write efficient queries with filters and projections
- Perform aggregation and statistics on MongoDB collections
- Handle real-world data such as Nginx logs stored in MongoDB

---

## 📝 Requirements

- MongoDB version 4.4 on Ubuntu 20.04 LTS
- Python 3.9 with PyMongo 4.8.0
- All MongoDB command files must start with a comment line (e.g., `// my comment`)
- All Python files must start with `#!/usr/bin/env python3`
- Follow **pycodestyle** style for Python files (version 2.5.x)
- Complete docstrings for all Python modules and functions
- Scripts must not execute code on import (use `if __name__ == "__main__":`)
- All files should end with a new line
- A `README.md` file at the root of the project is mandatory

---

## 📂 Project Structure
```sh
NoSQL/
├── 0-list_databases
├── 1-use_or_create_database
├── 2-insert
├── 3-all
├── 4-match
├── 5-count
├── 6-update
├── 7-delete
├── 8-all.py
├── 9-insert_school.py
├── 10-update_topics.py
├── 11-schools_by_topic.py
├── 12-log_stats.py
├── README.md
```

---

## 🚦 Tasks Overview

| Task | File | Description |
|-------|-------|-------------|
| 0 | 0-list_databases | List all databases in MongoDB shell |
| 1 | 1-use_or_create_database | Create or switch to a database |
| 2 | 2-insert | Insert a document into a collection |
| 3 | 3-all | List all documents in a collection |
| 4 | 4-match | List documents matching a field value |
| 5 | 5-count | Count documents in a collection |
| 6 | 6-update | Update documents by adding a new field |
| 7 | 7-delete | Delete documents matching a field value |
| 8 | 8-all.py | Python: list all documents in a collection |
| 9 | 9-insert_school.py | Python: insert a document with dynamic fields |
| 10 | 10-update_topics.py | Python: update topics field of documents by name |
| 11 | 11-schools_by_topic.py | Python: find schools by a specific topic |
| 12 | 12-log_stats.py | Python: analyze Nginx logs stored in MongoDB |

---

## ⚡ Key Concepts

### MongoDB Shell Commands
- Use `mongo` shell to interact with databases
- Basic commands: `show dbs`, `use <db>`, `db.collection.insert()`, `db.collection.find()`, `db.collection.update()`, `db.collection.remove()`
- Query filters and projections

### PyMongo Python Driver
- Connect to MongoDB using `MongoClient`
- Perform CRUD operations with Python functions
- Use type annotations and docstrings for clarity
- Handle query results and return appropriate data structures

### Data Analysis
- Aggregate and count documents
- Filter logs by HTTP methods and paths
- Display formatted statistics

---

## 🛠️ How to Use

1. **Install MongoDB 4.4 on Ubuntu 20.04**
   Follow the [official MongoDB installation guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

2. **Install Python dependencies**
```sh
pip install pymongo==4.8.0
```

3. **Run MongoDB shell scripts**
```sh
mongo < 0-list_databases
mongo my_db < 2-insert
```

4. **Run Python scripts**
```sh
./8-main.py
./9-main.py
./10-main.py
./11-main.py
./12-log_stats.py
```



5. **Check code style**
```sh
pycodestyle *.py
```

---

## 💡 Best Practices

- Always validate input parameters
- Use proper indexing in MongoDB for faster queries
- Use type annotations and docstrings in Python for maintainability
- Avoid running code on import; use `if __name__ == "__main__":`
- Handle exceptions and errors gracefully
- Keep your MongoDB server secure and updated

---

## 📖 Resources

- [MongoDB Official Documentation](https://docs.mongodb.com/)
- [PyMongo Documentation](https://pymongo.readthedocs.io/en/stable/)
- [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)
- [MongoDB Aggregation Framework](https://docs.mongodb.com/manual/aggregation/)
- [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/)

---

## 👨‍💻 Author
- [Saynez667](https://github.com/Saynez667)
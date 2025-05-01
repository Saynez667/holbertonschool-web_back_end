# Pagination Project 📄📊

Welcome to the **Pagination** project! This repository guides you through implementing efficient pagination techniques for datasets, including simple pagination, hypermedia pagination, and deletion-resilient pagination. You'll work with a real dataset of popular baby names and learn how to paginate data reliably even when items are deleted.

---

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Implement simple pagination using page number and page size parameters
- Create hypermedia pagination responses with metadata (next page, previous page, total pages)
- Build deletion-resilient pagination that handles dataset changes gracefully
- Use assertions to validate input parameters
- Work with CSV datasets and cache data efficiently

---

## 📝 Requirements

- All files must be executable and start with `#!/usr/bin/env python3`
- Use Python 3.9 on Ubuntu 20.04 LTS
- Follow **pycodestyle** style (version 2.5.x)
- All functions and modules must have complete docstrings explaining their purpose
- Type annotations are required for all functions and methods
- A `README.md` file must be present at the root of the project
- The dataset file `Popular_Baby_Names.csv` is used for all tasks

---

## 📂 Project Structure
```sh
pagination/
├── 0-simple_helper_function.py
├── 1-simple_pagination.py
├── 2-hypermedia_pagination.py
├── 3-hypermedia_del_pagination.py
├── Popular_Baby_Names.csv
├── README.md

```

---

## 🚦 Tasks Overview

| Task | File | Description |
|-------|-------|-------------|
| 0 | 0-simple_helper_function.py | Write `index_range(page, page_size)` returning start and end indexes for pagination |
| 1 | 1-simple_pagination.py | Implement `Server.get_page()` to paginate dataset with validation |
| 2 | 2-hypermedia_pagination.py | Implement `Server.get_hyper()` returning paginated data with metadata (page size, next/prev page, total pages) |
| 3 | 3-hypermedia_del_pagination.py | Implement deletion-resilient `get_hyper_index()` handling missing dataset rows gracefully |

---

## ⚡ Key Concepts

### Simple Pagination
- Calculate start and end indexes based on 1-indexed page number and page size
- Return the corresponding slice of the dataset

### Hypermedia Pagination
- Return paginated data plus metadata:
  - `page_size`: number of items on current page
  - `page`: current page number
  - `data`: list of items on current page
  - `next_page`: next page number or `None`
  - `prev_page`: previous page number or `None`
  - `total_pages`: total number of pages in dataset

### Deletion-Resilient Pagination
- Use an indexed dataset dictionary to handle deletions
- Return consistent data pages even if some rows are removed between requests
- Calculate `next_index` to continue pagination correctly

---

## 🛠️ Usage

1. **Clone the repository**
```sh
git clone <repo_url>
cd pagination
```

2. **Run tests or main scripts**
```sh
./0-main.py
```
```sh
./1-main.py
```
```sh
./2-main.py
```
```sh
./3-main.py
```

## 💡 Tips

- Use assertions to validate inputs (must be positive integers)
- Cache dataset in memory to optimize repeated access
- Use Python’s `csv` module to read datasets cleanly
- Write meaningful docstrings for all classes and methods
- Use `math.ceil()` to compute total pages accurately

---

## 📖 Resources

- [Python csv module documentation](https://docs.python.org/3/library/csv.html)
- [Python typing module](https://docs.python.org/3/library/typing.html)
- [PEP 8 - Style Guide for Python Code](https://peps.python.org/pep-0008/)
- [Pagination concepts and best practices](https://developers.google.com/api-design/design_patterns#list_pagination)

---

## 👨‍💻 Author
- [Saynez667](https://github.com/Saynez667)

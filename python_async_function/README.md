# Python Async Functions Project 🚦🐍

Welcome to the **Python Async Functions** project! This repository will help you understand and master asynchronous programming in Python using `asyncio`, coroutines, and the `random` module. You'll learn how to write concurrent code, measure execution time, and manage tasks—all with clean, type-annotated code. 🚀

---

## 📚 Learning Objectives

By the end of this project, you will be able to:

- Explain and use the **async** and **await** syntax in Python
- Execute asynchronous programs with **asyncio**
- Run multiple coroutines concurrently
- Create and manage **asyncio tasks**
- Use the **random** module for generating random delays

---

## 📝 Requirements

- A `README.md` file at the root of your project is **mandatory**
- Allowed editors: `vi`, `vim`, `emacs`
- All code runs on **Ubuntu 20.04 LTS** with Python 3.9
- Each file must end with a new line and be executable
- The first line of all Python files: `#!/usr/bin/env python3`
- Follow **pycodestyle** (version 2.5.x)
- All functions and coroutines must be **type-annotated**
- Each module and function must have a **complete docstring**
- No single-word documentation—write full sentences

---

## 🗂️ Project Structure
```sh
python_async_function/
├── 0-basic_async_syntax.py
├── 1-concurrent_coroutines.py
├── 2-measure_runtime.py
├── 3-tasks.py
├── 4-tasks.py
├── README.md
```

---

## 🚦 Tasks Overview

| Task | File | Description |
|------|------|-------------|
| 0 | 0-basic_async_syntax.py | Write an async coroutine `wait_random` that waits for a random delay (float, 0 to max_delay) and returns it |
| 1 | 1-concurrent_coroutines.py | Write `wait_n` to run `wait_random` n times concurrently and return the list of delays in ascending order |
| 2 | 2-measure_runtime.py | Write `measure_time` to compute the average runtime of `wait_n(n, max_delay)` |
| 3 | 3-tasks.py | Write `task_wait_random` (not async) that returns an `asyncio.Task` for `wait_random(max_delay)` |
| 4 | 4-tasks.py | Write `task_wait_n`, similar to `wait_n`, but using `task_wait_random` |

---

## ⚡ Key Concepts

### **async and await Syntax**
- Use `async def` to define a coroutine.
- Use `await` to pause execution until the awaited coroutine completes.

### **Executing Async Programs with asyncio**
- Use `asyncio.run()` to execute the main coroutine.
- `asyncio` provides tools for running and managing asynchronous code.

### **Running Concurrent Coroutines**
- Use `asyncio.gather()` or create multiple tasks to run coroutines concurrently.
- Each coroutine can run independently and pause for I/O or time-based events.

### **Creating asyncio Tasks**
- Use `asyncio.create_task()` to schedule a coroutine as a Task.
- Tasks run in the background and can be awaited for their results.

### **Using the random Module**
- Use `random.uniform(a, b)` to generate a random float between `a` and `b`.
- Useful for simulating random delays in async functions.

---

## 🛠️ Usage

1. **Clone the repository**
```sh
git clone <repo_url>
cd python_async_function
```


2. **Run a script**
```sh
./0-basic_async_syntax.py
```
3. **Check code style**
```sh
pycodestyle 0-basic_async_syntax.py
```

4. **Check type annotations**
```sh
mypy 0-basic_async_syntax.py
```

---

## 💡 Tips

- Always use `async`/`await` for non-blocking, concurrent code.
- Use `asyncio.run()` as the entry point for async programs.
- Manage multiple coroutines with `asyncio.gather()` or tasks.
- Write clear docstrings for every function and module.
- Use `random.uniform()` for generating random delays.

---

## 📖 Resources

- [Async IO in Python: A Complete Walkthrough (Real Python)]
- [asyncio — Asynchronous I/O (Python docs)]
- [random.uniform (Python docs)]

---

## 👨‍💻 Author

- [Saynez667](https://github.com/Saynez667)
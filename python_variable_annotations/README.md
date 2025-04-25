# Python Variable Annotations 🐍✨

Welcome to the **Python Variable Annotations** project! This repository will help you master Python's type hinting system, improve code readability, and ensure type safety using tools like `mypy`. Whether you're new to type annotations or want to solidify your understanding, you're in the right place! 🚀

---

## 📚 Learning Objectives

By the end of this project, you will be able to:

- Understand and use **type annotations** in Python 3
- Specify function signatures and variable types with annotations
- Explain and apply **duck typing**
- Validate your code using **mypy**

---

## 📝 Requirements

- **Editors:** `vi`, `vim`, or `emacs`
- **Interpreter:** Python 3.9 (Ubuntu 20.04 LTS)
- All files must end with a new line
- The first line of all Python files: `#!/usr/bin/env python3`
- Follow **pycodestyle** (version 2.5)
- All files must be executable
- All modules, classes, and functions must have complete docstrings (not just a word!)
- Include a `README.md` at the root of the project

---

## 🗂️ Project Structure
```sh
python_variable_annotations/
│
├── 0-add.py
├── 1-concat.py
├── 2-floor.py
├── 3-to_str.py
├── 4-define_variables.py
├── 5-sum_list.py
├── 6-sum_mixed_list.py
├── 7-to_kv.py
├── 8-make_multiplier.py
├── 9-element_length.py
└── README.md
```

---

## 🚦 Tasks Overview

| Task | Description | Example Signature |
|------|-------------|------------------|
| 0. Basic annotations - add | Add two floats | `def add(a: float, b: float) -> float:` |
| 1. Basic annotations - concat | Concatenate two strings | `def concat(str1: str, str2: str) -> str:` |
| 2. Basic annotations - floor | Floor a float to int | `def floor(n: float) -> int:` |
| 3. Basic annotations - to string | Float to string | `def to_str(n: float) -> str:` |
| 4. Define variables | Annotate variables | `a: int = 1` |
| 5. List of floats | Sum a list of floats | `def sum_list(input_list: List[float]) -> float:` |
| 6. Mixed list | Sum ints and floats | `def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:` |
| 7. String and int/float to tuple | Tuple with squared value | `def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:` |
| 8. Functions as return values | Multiplier function | `def make_multiplier(multiplier: float) -> Callable[[float], float]:` |
| 9. Duck typing & iterables | Iterable of sequences | `def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:` |

---

## 🛠️ Usage

1. **Clone the repository**
```sh
git clone <repo_url>
cd python_variable_annotations
```

2. **Run any script**
```sh
./0-add.py
```

3. **Check types with mypy**
```sh
mypy 0-add.py
```

---

## 💡 Tips

- Use **type hints** to clarify function inputs and outputs.
- Always write **docstrings** for modules, classes, and functions.
- Validate your code with **mypy** to catch type errors early.
- Stick to **pycodestyle** for clean, readable code.

---

## 📖 Resources

- [Python 3 typing documentation](https://docs.python.org/3/library/typing.html)
- [MyPy cheat sheet](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html)

---

## 👨‍💻 Author

- [Saynez667](https://github.com/Saynez667)

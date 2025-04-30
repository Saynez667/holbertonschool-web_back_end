# 🚀 Python Async Comprehension Project

📚 This project explores Python's asynchronous programming features, focusing on **async generators** and **async comprehensions**. Learn to write non-blocking code and handle concurrent I/O operations efficiently.

## 🎯 Learning Objectives
✔️ Write asynchronous generators using `async for`  
✔️ Utilize async comprehensions for concise async iterations  
✔️ Implement type annotations for generators  
✔️ Measure and optimize async runtime performance

## 📚 Resources
📰 [PEP 530 – Asynchronous Comprehensions](https://peps.python.org/pep-0530/) [12]  
📖 [Real Python Async IO Guide](https://realpython.com/async-io-python/) [1]  
🧠 [Async Programming Concepts](https://bbc.github.io/cloudfit-public-docs/asyncio/asyncio-part-1.html) [8]

## ⚙️ Installation
```sh
git clone https://github.com/yourusername/async-comprehension-project.git
cd async-comprehension-project
```

## 📋 Project Tasks

### 0. Async Generator (`0-async_generator.py`)
```sh
#!/usr/bin/env python3
import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
"""Yields 10 random numbers with 1-second intervals"""
for _ in range(10):
await asyncio.sleep(1)
yield random.uniform(0, 10)
```

**Features:**  
🕒 1-second async delays between yields  
🎲 Generates random floats using `random.uniform`  
🔄 Implements `AsyncGenerator` type hints

---

### 1. Async Comprehension (`1-async_comprehension.py`)
```sh
#!/usr/bin/env python3
from typing import List
from .0-async_generator import async_generator

async def async_comprehension() -> List[float]:
"""Collects 10 random numbers using async comprehension"""
return [i async for i in async_generator()]
```

**Implementation Details:**  
📥 Uses `async for` in list comprehension [12]  
⚡ Gathers results from async generator efficiently  
🔢 Returns list of 10 floating-point numbers

---

### 2. Runtime Measurement (`2-measure_runtime.py`)
```sh
#!/usr/bin/env python3
import asyncio
import time
from .1-async_comprehension import async_comprehension

async def measure_runtime() -> float:
"""Measures parallel execution of 4 async comprehensions"""
start = time.time()
await asyncio.gather(*(async_comprehension() for _ in range(4)))
return time.time() - start
```

**Key Insight:**  
⏱️ Total runtime ≈10 seconds (not 40!) because:  
🔀 All 4 comprehensions run concurrently  
⏳ Each comprehension takes ~10s (10x1s waits)  
🚥 Async I/O enables overlapping waits [1][3]

---

## 👨💻 Author
- [Saynez667](https://github.com/Saynez667)
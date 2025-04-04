# ES6 Promises Project 🚀✨

This repository contains tasks focused on mastering **ES6 Promises** in JavaScript. Each task demonstrates the creation, handling, and chaining of promises, as well as error handling and working with multiple promises.

---

## 📖 Table of Contents

1. [📋 Description](#-description)
2. [🛠️ Tasks](#️-tasks)
   - [✅ Task 0: Keep Every Promise](#-task-0-keep-every-promise)
   - [🤝 Task 1: Full Response](#-task-1-full-response)
   - [🔗 Task 2: Catch Me If You Can!](#-task-2-catch-me-if-you-can)
   - [👥 Task 3: Handle Multiple Promises](#-task-3-handle-multiple-promises)
   - [📝 Task 4: Simple Promise](#-task-4-simple-promise)
   - [❌ Task 5: Reject Promises](#-task-5-reject-promises)
   - [⚡ Task 6: Handle Profile Signup](#-task-6-handle-profile-signup)
   - [🌍 Task 7: Load Balancer](#-task-7-load-balancer)
   - [❓ Task 8: Throw an Error](#-task-8-throw-an-error)
   - [🛡️ Task 9: Guardrail with Try/Catch](#%EF%B8%8F-task-9-guardrail-with-trycatch)
3. [🚀 Usage](#-usage)
4. [📂 Repository Structure](#-repository-structure)

---

## 📋 Description

This project provides hands-on practice with **ES6 Promises**, a powerful feature in JavaScript for managing asynchronous operations. You'll learn to:
- Create and return promises.
- Handle resolved and rejected states.
- Work with multiple promises simultaneously.
- Implement error handling using `try/catch`.

---

## 🛠️ Tasks

### ✅ Task 0: Keep Every Promise
Write a function `getResponseFromAPI()` that returns a promise.

---

### 🤝 Task 1: Full Response
Write a function `getFullResponseFromAPI(success)` that:
- Resolves with an object `{ status: 200, body: 'Success' }` if `success` is `true`.
- Rejects with an error message `"The fake API is not working currently"` if `success` is `false`.

---

### 🔗 Task 2: Catch Me If You Can!
Write a function `handleResponseFromAPI(promise)` that:
1. Appends handlers to the promise.
2. Logs `"Got a response from the API"` to the console.
3. Returns an object `{ status: 200, body: 'success' }` on resolution or an empty error object on rejection.

---

### 👥 Task 3: Handle Multiple Promises
Write a function `handleProfileSignup()` that:
1. Imports `uploadPhoto` and `createUser`.
2. Resolves both promises and logs the results in the format `<photo-body> <firstName> <lastName>`.
3. Logs `"Signup system offline"` in case of an error.

---

### 📝 Task 4: Simple Promise
Write a function `signUpUser(firstName, lastName)` that returns a resolved promise with an object `{ firstName, lastName }`.

---

### ❌ Task 5: Reject Promises
Write a function `uploadPhoto(fileName)` that returns a rejected promise with an error message `<fileName> cannot be processed`.

---

### ⚡ Task 6: Handle Profile Signup
Write a function `handleProfileSignup(firstName, lastName, fileName)` that:
1. Calls `signUpUser` and `uploadPhoto`.
2. Returns an array of objects detailing the status and value or error for each promise.

---

### 🌍 Task 7: Load Balancer
Write a function `loadBalancer(chinaDownload, USDownload)` that:
1. Accepts two promises.
2. Returns the value of the first resolved promise.

---

### ❓ Task 8: Throw an Error
Write a function `divideFunction(numerator, denominator)` that:
1. Throws an error `"cannot divide by 0"` if the denominator is zero.
2. Otherwise, returns the result of the division.

---

### 🛡️ Task 9: Guardrail with Try/Catch
Write a function `guardrail(mathFunction)` that:
1. Executes the provided function and appends its result to a queue.
2. Appends any thrown errors to the queue.
3. Always appends `"Guardrail was processed"` to the queue.

---

## 🚀 Usage

1. Clone this repository:
```sh
git clone https://github.com/<your-github-username>/holbertonschool-web_back_end.git
```

2. Navigate to the project directory:
```sh
cd holbertonschool-web_back_end/ES6_promise
```

3. Run any task file using Node.js:
```sh
npm run dev <file-name>.js

```
---

## 📂 Repository Structure
```sh
holbertonschool-web_back_end/
├── ES6_promise/
│ ├── 0-promise.js # ✅ Task 0 script file
│ ├── 1-promise.js # 🤝 Task 1 script file
│ ├── 2-then.js # 🔗 Task 2 script file
│ ├── 3-all.js # 👥 Task 3 script file
│ ├── 4-user-promise.js # 📝 Task 4 script file
│ ├── 5-photo-reject.js # ❌ Task 5 script file
│ ├── 6-final-user.js # ⚡ Task 6 script file
│ ├── 7-load_balancer.js # 🌍 Task 7 script file
│ ├── 8-try.js # ❓ Task 8 script file
│ ├── 9-try.js # 🛡️ Task 9 script file
├── README.md # 📖 Project documentation (this file)
```
## Authors
[Saynez667](https://github.com/Saynez667)
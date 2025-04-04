# ES6 Data Manipulation Project 📊✨

This repository contains a series of tasks focused on mastering **ES6 data manipulation techniques** in JavaScript. Each task demonstrates the use of modern JavaScript features such as `map`, `filter`, `reduce`, `Set`, and `Map` to work with data efficiently.

---

## 📖 Table of Contents

1. [📋 Description](#-description)
2. [🛠️ Tasks](#️-tasks)
   - [👨‍🎓 Task 0: Basic List of Objects](#-task-0-basic-list-of-objects)
   - [🆔 Task 1: More Mapping](#-task-1-more-mapping)
   - [🌍 Task 2: Filter by Location](#-task-2-filter-by-location)
   - [➕ Task 3: Reduce to Sum IDs](#-task-3-reduce-to-sum-ids)
   - [🔄 Task 4: Combine and Update Grades](#-task-4-combine-and-update-grades)
   - [📏 Task 5: Typed Arrays](#-task-5-typed-arrays)
   - [📚 Task 6: Set Data Structure](#-task-6-set-data-structure)
   - [🔍 Task 7: Check Values in Set](#-task-7-check-values-in-set)
   - [🧹 Task 8: Clean Set Values](#-task-8-clean-set-values)
   - [🛒 Task 9: Groceries List Map](#-task-9-groceries-list-map)
   - [🔧 Task 10: Update Unique Items in Map](#-task-10-update-unique-items-in-map)
3. [🚀 Usage](#-usage)
4. [📂 Repository Structure](#-repository-structure)

---

## 📋 Description

This project is designed to provide hands-on experience with **ES6 data structures** and methods. You'll learn to:
- Use `map`, `filter`, and `reduce` for array transformations.
- Work with `Set` and `Map` for advanced data handling.
- Create typed arrays for memory-efficient data storage.
  
Each task builds on these concepts to develop efficient, modern JavaScript code.

---

## 🛠️ Tasks

### 👨‍🎓 Task 0: Basic List of Objects
Create a function `getListStudents()` that returns an array of objects, each representing a student with the following attributes:

1. `id` (Number)
2. `firstName` (String)
3. `location` (String)

Example:
```sh
[
{ id: 1, firstName: 'Guillaume', location: 'San Francisco' },
{ id: 2, firstName: 'James', location: 'Columbia' },
{ id: 5, firstName: 'Serena', location: 'San Francisco' }
]
```

---

### 🆔 Task 1: More Mapping
Create a function `getListStudentIds()` that takes an array of student objects and returns an array of their IDs. If the input is not an array, return an empty array.

---

### 🌍 Task 2: Filter by Location
Create a function `getStudentsByLocation()` that filters students by their location. It accepts two parameters:
1. A list of students (from Task 0).
2. A city (string).

---

### ➕ Task 3: Reduce to Sum IDs
Create a function `getStudentIdsSum()` that calculates the sum of all student IDs using the `reduce` method.

---

### 🔄 Task 4: Combine and Update Grades
Create a function `updateStudentGradeByCity()` that updates student grades based on their city. It accepts:
1. A list of students.
2. A city (string).
3. An array of grade objects in the format:
{ studentId: Number, grade: Number }

If a student doesn't have a grade, set it to `"N/A"`.

---

### 📏 Task 5: Typed Arrays
Create a function `createInt8TypedArray()` that returns a new ArrayBuffer with an Int8 value at a specific position. If the position is invalid, throw an error `"Position outside range"`.

---

### 📚 Task 6: Set Data Structure
Create a function `setFromArray()` that converts an array into a Set.

---

### 🔍 Task 7: Check Values in Set
Create a function `hasValuesFromArray()` that checks if all elements in an array exist within a Set. Return `true` or `false`.

---

### 🧹 Task 8: Clean Set Values
Create a function `cleanSet()` that returns a string of all values in a Set that start with a specific string (`startString`). The values are concatenated with a hyphen (`"-"`).

---

### 🛒 Task 9: Groceries List Map
Create a function `groceriesList()` that returns a Map with grocery items and their quantities:
```sh
{
'Apples' => 10,
'Tomatoes' => 10,
'Pasta' => 1,
'Rice' => 1,
'Banana' => 5
}
```


---

### 🔧 Task 10: Update Unique Items in Map
Create a function `updateUniqueItems()` that updates all items with quantity `1` in a Map to have quantity `100`. If the input is not a Map, throw an error `"Cannot process"`.

---

## 🚀 Usage

1. Clone this repository:
```sh
git clone https://github.com/<your-github-username>/holbertonschool-web_back_end.git
```

2. Navigate to the project directory:
```sh
cd holbertonschool-web_back_end/ES6_data_manipulation
```

3. Run any task file using Node.js:
```sh
npm run dev <file-name>.js
```


---

## 📂 Repository Structure
```sh
holbertonschool-web_back_end/
├── ES6_data_manipulation/
│ ├── 0-get_list_students.js # 👨‍🎓 Task 0 script file
│ ├── 1-get_list_student_ids.js # 🆔 Task 1 script file
│ ├── 2-get_students_by_loc.js # 🌍 Task 2 script file
│ ├── 3-get_ids_sum.js # ➕ Task 3 script file
│ ├── 4-update_grade_by_city.js # 🔄 Task 4 script file
│ ├── 5-typed_arrays.js # 📏 Task 5 script file
│ ├── 6-set.js # 📚 Task 6 script file
│ ├── 7-has_array_values.js # 🔍 Task 7 script file
│ ├── 8-clean_set.js # 🧹 Task 8 script file
│ ├── 9-groceries_list.js # 🛒 Task 9 script file
│ ├── 10-update_uniq_items.js # 🔧 Task 10 script file
├── README.md # 📖 Project documentation (this file)
```


## Authors
[Saynez667](https://github.com/Saynez667)
# ES6 Classes Project 🏫

## Learning Objectives 🎯

By the end of this project, you should be able to explain:

- How to define a Class 📚
- How to add methods to a class 🔧
- Why and how to add a static method to a class 🔒
- How to extend a class from another 🧬
- Metaprogramming and symbols 🔮

## Requirements 📋

- Environment: Ubuntu 20.04 LTS using Node.js 20.x.x and npm 9.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- All tests and lint should pass

## Setup 🛠️

### Install NodeJS 20.x.x
```sh
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:
```sh
nodejs -v
npm -v
```


### Install Jest, Babel, and ESLint

In your project directory:
```sh
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```

Don't forget to run `npm install` when you have the `package.json` file.

## Tasks 📝

0. Implement a `ClassRoom` class
1. Create classrooms using the `ClassRoom` class
2. Implement a `HolbertonCourse` class with getters and setters
3. Implement a `Currency` class
4. Implement a `Pricing` class
5. Implement an abstract `Building` class
6. Implement a `SkyHighBuilding` class that extends `Building`
7. Implement an `Airport` class
8. Implement a `HolbertonClass` class with primitive casting
9. Fix hoisting issues in the provided code
10. Implement a `Car` class with a cloning method
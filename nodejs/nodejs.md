**NodeJs:**

- NodeJs is a javascrript runtime environment to execute javascript ouside the browser.
- NodeJs uses chrome's V8 browser engine

**NodeJs Architecture:**

- Non blocking Asynchronous
- Real world Example: Server order and serving food

**When to use and not**

- should considered for the Data Driven Project
- Not for the high intensive CPU usage Projects such as image processing etc..

**Global Object and Module**

- In Node.js, process is a global object that provides information and control over the current Node.js process. It allows you to interact with the running environment, manage input/output, and handle events related to the lifecycle of a Node.js process.

- A module is simply a file in Node.js.
- Each file has its own scope (not global).
- Modules help organize code into reusable, smaller parts.
- Node.js uses CommonJS module system by default (require() and module.exports).
- When you write a file in Node.js (any .js file), Node automatically wraps your entire code inside a special function called the **Module Wrapper Function**.

```javascript
(function (exports, require, module, __filename, __dirname) {
  // Your entire module code lives here
}); // IIFE(Immediately Invoked Function Execution)
```

**Common Module**

- path
- fs
- os
- http
- events

# CPA - Callbacks, Promises & Async-Await

> Async-Await >>Promise Chain >> Ballback Hell

## Sync in JS

- Synchronous
  > Synchronous means the code runs in a particular sequence of instraction given in the program. Each instruction waits for the previous instruction to complete the execution.
- Asynchoronous
  > Due to synchronous programming, something imp instruction get blcok due to some previous instractions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediatly and doesn't blcok the flow.

## CallBacks Hell

> A callback is a function passed as an argument to another function.

- Callback Hell : Nested callbacks stacked below one another forming a pyramid structure (Pyramid of Doom)
  > This style of programming becomes difficult to understand & manage.

## Promises

**Promise is for "eventuat" completion of task. It's an object of JS.And it is a solution of callback hell.**

```
let promise = new Promise((resolve, reject) => {....})
NOTE : function with 2 handlers
```

**_resolve & reject are callbacks provided by JS_**

### Promise Two Funtion

- .than() & .catch()
  > promise.then((res) => {.....});
  > promise.catch((err) => {.....});

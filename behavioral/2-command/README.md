# Command

Turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request’s execution, and support undoable operations.

## When to use?

In JavaScript, we can essentially encapsulate an operation in a function. A **Command** turns that function into a class with one method: `execute()`.

Thus, it might not be necessary to do. A function is simpler. But, sometimes turning a function into a **Command** could be handy. The main difference is that the **Command** can hold internal state. So it allows to easily implement things like undo/redo, deferred execution, remote execution, etc.

## Pros

- Decouples classes that invoke an operation from the execution of the operation itself.
- Makes it easy to add new **Command** operations (Open/Closed Principle).
- Makes it easy to implement things like undo/redo, deferred execution, etc.
- Makes it easy to combine existing **Command** operations to build complex ones.

## Cons

- One more level of abstraction.
- Most of the time, in JavaScript, a function would be simpler to do the same job.


# Memento

Lets you save and restore the previous state of an object without revealing the details of its implementation.

See https://refactoring.guru/design-patterns/memento

## When to use?

When you need to create a snapshot of an object's state to restore it later. Typical use-case is the "undo" use-case. Another use-case is when you deal with transactions, so you can rollback.

Without a Memento, you have to expose object's state. This violates its encapsulation and couple everything.

Extracting the logic of restoring to the Memento class also keeps the object (called "originator") clean.

## Pros

- Makes it possible to produce snapshots of an object's state without violating encapsulation.

## Cons

- One more layer of abstraction.
- In JavaScript, it might be challenging to ensure the state within the Memento stays untouched.


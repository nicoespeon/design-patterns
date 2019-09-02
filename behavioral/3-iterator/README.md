# Iterator

Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

See https://refactoring.guru/design-patterns/iterator

## When to use?

When you need different ways to traverse a collection of elements.

Passing an **Iterator** instead of the collection to the client is a good idea: the client doesn't need to know the inner details of the collection.

## Pros

- Makes it easy to add new ways to iterate over the same collection (Open/Closed Principle).
- Makes it easy to change the collection implementation details.
- Declutters the client code from the traversal algorithm, which can be heavy.
- You can traverse the same collection in parallel since each **Iterator** is independent.

## Cons

- One more level of abstraction (overkill for simple traversal of simple collections).


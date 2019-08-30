# Prototype

Copies existing objects without making your code dependent on their classes.

See https://refactoring.guru/design-patterns/prototype

## When to use?

When you need to clone an object so you don't mutate the original instance.

Useful to create immutable Value Objects and reduce the number of stateful objects (Entities) in our code.

## Pros

- Helps to create more immutable Value Objects.
- Can get rid of duplicated code.

## Cons

- Tricky to implement on existing objects that do too much.

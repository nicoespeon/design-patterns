# Composite

Composes objects into tree structures and then work with these structures as if they were individual objects.

See https://refactoring.guru/design-patterns/composite

## When to use?

When you can find a recursive algorithm that would treat every element the same way.

It simplifies a lot the client code because it encapsulates the different types of elements. It also makes it easy to extend the algorithm to handle more types.

## Pros

- Simplifies client code, making it use the same interface.
- Handles recursive algorithms well.
- Makes it easy to handle new types of elements (Open/Closed Principle).

## Cons

- One more layer of abstraction.

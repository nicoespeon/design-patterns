# Factory Method

Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

See https://refactoring.guru/design-patterns/factory-method

## When to use?

When we have different "types" of the same thing that we need to create. We can smell the problem when the conditional logic for creating it is spread across the codebase.

## Pros

- Bubbles up the decision, so leaf nodes of our architecture are simpler. They don't depend on concrete implementation.
- Makes it easy to add new types (Open/Closed Principle).

## Cons

- One more layer of abstraction.

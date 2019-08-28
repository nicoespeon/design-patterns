# Abstract Factory Method

Produces families of related objects without specifying their concrete classes.

## When to use?

When we have many things that have different "types" and we can't use any random combination of them. Things should be created with a coherent "type".

It's an evolution of the **Factory Method**, for things that should be created together.

## Pros

- Bubbles up the decision, so leaf nodes of our architecture are simpler. They don't depend on concrete implementation.
- Makes it easy to add new types (Open/Closed Principle).
- Prevents impossible combinations.

## Cons

- One more layer of abstraction.

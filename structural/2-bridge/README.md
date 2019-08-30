# Bridge

Splits a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

See https://refactoring.guru/design-patterns/bridge

## When to use?

Typically, when we need to grow something in 2 different directions.

When we first need to have variations of the same thing, we might go for inheritance. But if we need to have another type of variation, inheritance get in the way. It's the classic issue that leads to prefer **Composition over Inheritance**.

For example:
- Circle and Rectangles are Shapes
- But they could also be Red or Blue.
- What if we want to add another color? Another shape?

The **Bridge** is here to split 2 dimensions, so we can separate responsibilities and combine them as we need.

## Pros

- Separates responsibilities into different classes.
- Makes it easy to compose behaviour together to create new powerful abstractions.
- Makes it easy to create new concrete implementations (Open/Closed Principle).

## Cons

- One more layer of abstraction.

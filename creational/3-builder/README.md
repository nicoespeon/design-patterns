# Builder

Constructs complex objects step by step. Allows you to produce different types and representations of an object using the same construction code.

See https://refactoring.guru/design-patterns/builder

## When to use?

Very useful to build a semantic API to build something.

I use it a lot to improve tests readability when tested elements do to much and are complex to instantiate. In that case it doesn't solve the root cause, but it's an affordable first step.

## Pros

- Can provide a semantic API to create things. Useful to set up context in tests (the "given" / "arrange" step).
- Makes it possible to construct something progressively.
- Separates object creation logic from object behaviour. Useful when there are a lot of invariants for object creation.

## Cons

- One more layer of abstraction.
- Can be used to hide bad design without solving the root cause.

# Adapter

Allows objects with incompatible interfaces to collaborate.

See https://refactoring.guru/design-patterns/adapter

## When to use?

Very common pattern to provide different concrete implementations of the same interface.

If you separate your Domain code from the Infrastructure one (and you should), **Adapter** will be the common pattern you use to adapt things like "the HTTP protocol" to your business needs.

## Pros

- Separates the intention from the concrete implementation.
- Makes it easy to create new concrete implementations (Open/Closed Principle).

## Cons

- One more layer of abstraction.

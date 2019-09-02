# Mediator

Lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

See https://refactoring.guru/design-patterns/mediator

## When to use?

When you have many components that directly talk to each other, making the whole relationship complex to understand and modify. A **Mediator** decouple all of these elements.

You can also provide a different **Mediator** to change how the components interact together, without touching the components themselves.

## Pros

- Extracts the logic of components interaction into a single place.
- Makes it easy to combine components differently (Open/Closed Principle).
- Makes components easier to re-use in other contexts.

## Cons

- There is a risk of the **Mediator** turning into a God Object.


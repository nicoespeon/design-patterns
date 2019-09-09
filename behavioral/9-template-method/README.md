# Template Method

Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

See https://refactoring.guru/design-patterns/template-method

## When to use?

When you want to share a generic algorithm structure, but you might have subtle variance in the implementation.

It's a very popular pattern to refactor the commonalities between different classes and create kinda of a framework. Clients need to fill the blanks. They can override default behaviour. They can provide implementation to run during *hooks*.

**Template Method** is based on inheritance where **Strategy** is based on composition. This is fine. Be careful to stay shallow and narrow: don't add more hierarchical levels.

## Pros

- Clients can override certain parts of a large algorithm.
- Removes code duplication.
- Makes it easy to add new variant implementations (Open/Closed Principle).

## Cons

- One more layer of abstraction.
- Makes it easy to violate the Liskov Substitution Principle by suppressing a default step implementation in a subclass.
- It can become hard to maintain if it grows too much.

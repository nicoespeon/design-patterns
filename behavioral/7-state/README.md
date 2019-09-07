# State

Lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

See https://refactoring.guru/design-patterns/state

## When to use?

When you can represent your object as a state machine. If it behaves differently depending on its current state, you can apply the pattern. It's convenient to distinct each state into different classes to clarify the behaviour of the whole object.

When you see the same enums or booleans conditional checks used in many methods of your class, think about it. Especially if you can detect the transitions (when you change the values of these enums or booleans).

It looks similar to the **Strategy** pattern. The difference is that states can be aware of each other, transition to each other. Strategies never know about each other.

## Pros

- Simplifies code by reducing conditional checks in every method.
- Makes it easy to add new states (Open/Closed Principle).
- Separates the code related to particular states in different classes (Single Responsibility Principle).

## Cons

- One more layer of abstraction.

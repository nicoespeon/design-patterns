# Decorator

Attaches new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

See https://refactoring.guru/design-patterns/decorator

## When to use?

When you can need to add behaviour "before" or "after" an existing code.

**Decorator** allows you to do so without modifying the existing code. Thus, you can combine many **Decorators** to build powerful objects.

## Pros

- Doesn't change the interface of existing class.
- Makes it easy to compose behaviours.
- Makes it easy to create new behaviour (Open/Closed Principle).

## Cons

- One more layer of abstraction.
- Final behaviour depends on the order of the decorators stack.

# Visitor

Lets you separate algorithms from the objects on which they operate.

See https://refactoring.guru/design-patterns/visitor

## When to use?

When you need to perform an operation on all elements of a complex object structure (like an object tree).

You'll also use it when you need to separate responsibilities. You might need to do a XML export of all shapes, but the "XML export" concept seems orthogonal to each shape responsibility. It's an auxiliary behaviour. What you want is a way to *traverse* each shape, then let the **Visitor** do its work.

**Visitor** can be combined with **Composite** or **Iterator** to perform operations over complex data structures.

## Pros

- Separates the responsibilities of an auxiliary behaviour.
- Makes it easy to add new behaviours that apply to a list of objects (Open/Closed Principle).
- Makes it possible to store some state while traversing a collection of objects.

## Cons

- One more layer of abstraction.
- You won't access private fields and methods of the visited elements.

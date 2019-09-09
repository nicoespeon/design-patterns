# Strategy

Lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

See https://refactoring.guru/design-patterns/strategy

## When to use?

When you have different variants of an algorithm within the same object. The way to spot it is to check for duplicated branched logic in the different methods.

Extracting the different variants into independent **Strategies** will declutter the main object.

The **Strategy** pattern is also useful when you have many similar classes that only differ in the way they execute some behaviour. Extracting this behaviour in **Strategies** allow you to merge the similar code back into one class, removing the duplication.

The usual way to go is to refactor the code until you highlight a top-level switch statement. Each case of the switch could be extracted as a variant.

Unlike **State**, strategies are not aware of each others.

## Pros

- Isolate implementation details of an algorithm from the code that uses it (Separation of Responsibility Principle).
- Makes it easy to introduce new strategies (Open/Closed Principle).
- Makes it possible to swap algorithm at runtime.
- Replaces eventual inheritance with composition.

## Cons

- One more layer of abstraction.

# Singleton

Ensures that a class has only one instance, while providing a global access point to this instance.

See https://refactoring.guru/design-patterns/singleton

## When to use?

When having 2 instances of the class will create bugs (security, data corruption, etc.).

It has a nasty side-effect of coupling things together. Which is usually something we don't want, unless very few exceptions. Also, you can prevent having 2 instances just with code discipline.

It's often abused because of it's side-effect of providing a global access to the same reference. It's more convenient when we write the code, but it's the most common pain points in maintaining it.

It's not bad *per se*. Just like inheritance, the problem appears when it's used by default when it's not the solution to the problem.

Thus: **if your need is to access something that is defined elsewhere, don't use a Singleton**. Look for other patterns. And have a look at Dependency Injection.

## Pros

- Ensures there can't be another instance of the class in the app.

## Cons

- Couples things together. Thus, it makes tests challenging and complex.

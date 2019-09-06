# Observer

Lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

See https://refactoring.guru/design-patterns/observer

## When to use?

Essentially, when you need to decouple elements. Using an "event-bus" mechanism is a good way to decouple the architecture. Objects emits interesting events and others can subscribe to them.

It's very handy to deal with subscription mechanisms. Listeners can join later or implement some clever subscriptions rules, if needed.

The **Observer** pattern is often used with a **Mediator** to expose only one main communication system across the entire app. But it's possible to apply the pattern to sub-parts of the app, if that makes sense. Also, it's possible to have the **Mediator** directly call components, instead of publishing events to listeners.

## Pros

- Makes it easy to introduce new listeners to enrich the Application (Open/Closed Principle).
- Decouple objects.

## Cons

- One more layer of abstraction.
- Listeners are notified in a "random" order. It could be challenging to do otherwise.

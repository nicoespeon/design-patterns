# Chain of Responsibility

Passes requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

## When to use?

There are 2 main usages of this pattern:
1. When you need to bubble up an event to a chain of Handlers. The first Handler that can deal with the event will stop the propagation. Pretty much like DOM events bubbling up (e.g. click).
1. When you need to perform a sequence of operations. Each Handler will do something with the data. If something is wrong for one Handler, it will stop propagation. Pretty much like middlewares on the server.

It's very convenient to re-use individual Handlers. By separating the handling logics and their association, you can build any kind of **Chain of Responsibility** you need.

If you have a sequence, you can apply this pattern. That means any Tree can be turned into a **Chain of Responsibility**.

## Pros

- Makes it easy to add new Handlers (Open/Closed Principle).
- Makes it easy to create new **Chain of Responsibility** by re-using Handlers.

## Cons

- One more level of abstraction.


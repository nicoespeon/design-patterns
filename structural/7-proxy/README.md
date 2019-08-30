# Proxy

Provides a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

See https://refactoring.guru/design-patterns/proxy

## When to use?

When you need to intercept requests before they hit the actual class. This leads to a lot of different use-cases.

It allows you to do:
- Lazy initialization, where the Proxy will instantiate the actual object only when it's needed.
- Local execution, when the actual service object is remote. The client would not know about that.
- Caching results.
- etc.

*Note: JavaScript has a `Proxy()` class that applies this pattern. It will intercept all `get` / `set` to the given object, and you can decide what to do first.*

## Pros

- Clients don't have to be aware of the Proxy.
- You can control the lifecycle of the proxied object, exposing the Proxy even if the actual object is not available yet.
- Makes it easy to introduce new behaviour (Open/Closed Principle).

## Cons

- One more layer of abstraction.

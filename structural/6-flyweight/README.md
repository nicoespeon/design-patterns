# Flyweight

Lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

## When to use?

When you need to think about the RAM. And when you can identify objects that share common properties.

## Pros

- Allows you to save a lot of RAM.

## Cons

- Code is more complex because it's splitted for performance reasons.
- You might be trading RAM over CPU cycles as context data will be recalculated at every call.

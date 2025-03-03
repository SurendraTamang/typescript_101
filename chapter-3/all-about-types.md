# All about Types

* any - Godfather of type, last resort so avoid this as much as possible.
In TypeScript, both `unknown` and `any` are top types (they can hold values of any type), but they have important differences in how they behave:

### `any` type

- Bypasses type checking completely
- Allows access to any property or method without verification
- Allows assignment to any other type
- Essentially turns off TypeScript's type checking

```typescript
let valueAny: any = 10;
valueAny = "string";      // OK
valueAny = { x: 10 };     // OK
valueAny.foo();           // OK - no error despite .foo() possibly not existing
const num: number = valueAny; // OK - can assign to any other type
```

### `unknown` type

- Type-safe version of `any`
- Cannot be used without type checking or narrowing
- Cannot access properties or call methods without verification
- Cannot be assigned to other types without explicit casting

```typescript
let valueUnknown: unknown = 10;
valueUnknown = "string";    // OK
valueUnknown = { x: 10 };   // OK

// Error: Object is of type 'unknown'
valueUnknown.foo();         
valueUnknown.x;             

// Error: Type 'unknown' is not assignable to type 'number'
const num: number = valueUnknown;

// Must narrow the type before use
if (typeof valueUnknown === "number") {
    const num: number = valueUnknown; // OK - now it's safe
}

// Or use type assertion (but this shifts responsibility to you)
const num: number = valueUnknown as number;
```

### When to use each

- Use `unknown` when you don't know the type but want type safety
- Use `any` only when you absolutely need to opt out of type checking (legacy code integration, etc.)
- `unknown` is generally preferred as it's much safer

The key difference: `unknown` forces you to verify the type before performing operations, while `any` allows everything without checks.

* boolean  - true/false
* number
* string
* bigint


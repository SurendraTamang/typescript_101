

## Arrays and Tuples

```typescript
// Arrays - when you want collections of the same type
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

// You can also write arrays like this
let fruits: Array<string> = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"

// Tuples - fixed-length arrays where each position has a specific type
let person: [string, number, boolean] = ["Alice", 30, true];
console.log(person); // ["Alice", 30, true]
```

## Object Types and Interfaces

```typescript
// Object type
let user: { name: string; age: number } = {
  name: "John",
  age: 28
};
console.log(user.name); // "John"

// Interface - a cleaner way to define object shapes
interface Employee {
  name: string;
  id: number;
  isManager?: boolean; // Optional property with ?
}

let employee: Employee = {
  name: "Sarah",
  id: 123
  // isManager is optional, so we can omit it
};

console.log(employee); // { name: "Sarah", id: 123 }
```

## Functions with Type Annotations

```typescript
// Function with parameter types and return type
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10)); // 15

// Arrow function with types
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};
console.log(greet("TypeScript Learner")); // "Hello, TypeScript Learner!"

// Function with optional parameter
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName;
  }
}
console.log(buildName("John")); // "John"
console.log(buildName("John", "Doe")); // "John Doe"
```

## Enums

```typescript
// Enum - a way to define a set of named constants
enum Direction {
  North,
  East,
  South,
  West
}

let myDirection: Direction = Direction.North;
console.log(myDirection); // 0 (by default, enums are numbered starting at 0)

// You can also specify the values
enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404
}

console.log(HttpStatus.OK); // 200
```

## Type Assertions

```typescript
// Sometimes you know more about a type than TypeScript does
let someValue: any = "This is a string";

// Type assertion using "as" syntax (preferred)
let strLength: number = (someValue as string).length;
console.log(strLength); // 16

// Alternative angle-bracket syntax (not usable in JSX)
let altStrLength: number = (<string>someValue).length;
console.log(altStrLength); // 16
```

## Let's try a mini-project!

Let's create a simple todo list manager:

```typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

class TodoList {
  private todos: Todo[] = [];
  private nextId: number = 1;

  public addTodo(text: string): void {
    const newTodo: Todo = {
      id: this.nextId++,
      text,
      completed: false
    };
    this.todos.push(newTodo);
    console.log(`Added: "${text}"`);
  }

  public completeTodo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = true;
      console.log(`Completed: "${todo.text}"`);
    } else {
      console.log(`Todo with id ${id} not found`);
    }
  }

  public listTodos(): void {
    console.log("Your todos:");
    this.todos.forEach(todo => {
      const status = todo.completed ? "✓" : "□";
      console.log(`${todo.id}. [${status}] ${todo.text}`);
    });
  }
}

// Usage
const myTodos = new TodoList();
myTodos.addTodo("Learn TypeScript basics");
myTodos.addTodo("Practice with interfaces");
myTodos.addTodo("Build a small project");
myTodos.completeTodo(1);
myTodos.listTodos();
```

If this code were run, the output would be:

```
Added: "Learn TypeScript basics"
Added: "Practice with interfaces"
Added: "Build a small project"
Completed: "Learn TypeScript basics"
Your todos:
1. [✓] Learn TypeScript basics
2. [□] Practice with interfaces
3. [□] Build a small project
```

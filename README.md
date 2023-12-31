# SOLID Principles

The SOLID principles represent a set of five design principles for object-oriented programming that, when adhered to properly, can lead to more understandable, flexible, and maintainable software. These principles are:

## 1. **S - Single Responsibility Principle (SRP)**
- A class should have only one reason to change.
- This implies that a class should have only one job or responsibility. By adhering to this principle, software becomes easier to modify since there's less functionality dependent on a single class.

## 2. **O - Open/Closed Principle (OCP)**
- Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
- Instead of modifying existing code (which has already been tested), we should be able to extend it through new code.

## 3. **L - Liskov Substitution Principle (LSP)**
- Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
- Essentially, if one class derives from another, then it should extend the behavior of the superclass without overriding its original behavior.

## 4. **I - Interface Segregation Principle (ISP)**
- No client should be forced to depend on interfaces it doesn't use.
- It's better to have multiple specific interfaces rather than one general-purpose interface.

## 5. **D - Dependency Inversion Principle (DIP)**
- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend upon details. Details should depend upon abstractions.
- This means instead of writing code that depends on specific details (like concrete classes), we should depend on interfaces or abstract classes. This makes the code more modular and easier to change or extend in the future.

Adhering to these principles doesn't guarantee high-quality software on its own, but it provides a great foundation for writing software that's robust, maintainable, and flexible.

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

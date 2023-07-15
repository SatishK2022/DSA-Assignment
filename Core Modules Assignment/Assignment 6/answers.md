# Assignment 6

### Q.1 What’s Constructor And Its Purpose?
Ans- The constructor is a special type of method of a class which is used to initialize a newely created object. Whenever a object is created constructor is called automatically.

### Q.2 Explain This Keyword and Its Purpose?
Ans- `this` keyword refers to the current object if it is used in an object.

For Example:-
```javascript
const obj = {
    firstName: 'Satish',
    lastName: 'Kumar',
    age: 19,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

// Here `this` refers to the current object
```

When `this` keyword is used alone it refers to the global scope and in the browser it refers to the `window` object.

### Q.3 What’s Call, Apply, Bind Method & Difference Between them
Ans- ***`call()` :-*** call is a function that is used to change the value of this inside a function and execute it with the arguments provided.

***`apply()` :-*** The Apply function is very similar to the Call function. The only difference between call and apply is the difference in how arguments are passed.

In apply, arguments we can pass an argument as an array literal or a new array object.

***`bind()` :-*** The bind function creates a copy of a function with a new value to the this present inside the calling function.

### Q.4 Explain OOPS ? 
Ans- Object Oriented Programming is a programming based on classes and objects. These group data and methods inside a single unit.

It is developed to make code flexible and easier to maintain.

The important Terms come under OOPS are:-
1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation

### Q.5 Whats Abstraction and Its Purpose?
Ans- Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.

For Example:-
If a user is using a `car` he don't need to know how it works internally. He only needs to know how to `start`, `accelerate`, `stop` etc.

### Q.6 Whats Polymorphism and Purpose of it?
Ans- Polymorphism means having different and many forms. We can overwrite a method inherited from a parent class.

### Q.7  Whats Inheritance and Purpose of it?
Ans- Inheritance makes all properties and methods available to a child class. This allows us to reuse common logic and to model real-world relationships.

For Example:-
child inherits some properties of his Father

### Q.8 Whats Encapsulation and Purpose of it ?
Ans- Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

This will keep code that's outside the class from accidentally manipulating internal methods and properties.

### Q.9 Explain Class in JavaScript?
Ans- The class is like a blueprint or a template of an object. From a class we can make Objects.

For Example:-
We have a class `Animal` and we can make objects from it like `dog`, `cat`, `horse` etc.

### Q.10 What’s Super Keyword & What it does?
Ans- The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.






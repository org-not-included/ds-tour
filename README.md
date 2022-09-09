# ds-tour
This repo implements a variety of data structures and shows examples of OOP using JavaScript.  
  
The algorithms and solutions in this repo are some of the most frequent questions asked during coding interviews. 
  
---  
## What is Javascript?
Javascript is a web based scripting programming language that allows you to build interactive web pages. Javascript's default synchronous behavior is achieved through the use of stacks in the browser's V8 engine.  
  
  
---  
  
While being synchronous in nature, it can also act asynchronously.  
  
 Asynchronous behavior can be leveraged through the use of `WebAPIs`. Since they handle the `Task` separately from the `Call Stack`. This allows the `EventLoop` to continue adding new tasks from the `Task Queue`, whenever the `Call Stack` is empty.  
  
The `WebAPI` will send it's result to the `Task Queue`, which the `EventLoop` will eventually pick up and send to the `Call Stack`.  


A `v8 engine` collects HTML files and other resources, and represents them as an interactive webpage for the user.   
  
  
Javascript has a number of components involved in this process:
1. (Task) Queue -- A list of functions
2. EventLoop -- Monitors Queue and Stack for scheduling next tasks


There are also other components: 
1. (Call) Stack -- contains currently executing functions (part of `v8 engine` in browser)
2. Heap -- allocates memory for variables and objects (part of `v8 engine` in browser)
3. Web APIs -- processes running outside stack (such as `SetTimeout()`, `fetch()`, webhook processes, etc.)
  
More info about Javascript synchronicity can be found in [this article](https://frontend.turing.edu/lessons/module-3/promises.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=582477081488&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2).
  
## Explore OOP using JavaScript. 

As JavaScript is widely used in Web Development, in this repo we will explore Object-Oriented paradigms supported in JavaScript. 
  
A few common OOPS interview questions in JavaScript include:
- How Object-Oriented Programming is implemented in JavaScript?  
- How they differ from other languages?  
- Can you implement Inheritance in JavaScript?
- and so on…
  
---  
  
There are certain features or mechanisms which makes a Language Object-Oriented like: 
  
- Object
- Classes
- Encapsulation
- Inheritance
  
---  
  
Let’s dive into the details of each one of them and see how they are implemented in JavaScript.

1. **Object** – An Object is a unique entity that contains property and methods. For example “car” is a real life Object, which has some characteristics like color, type, model, horsepower and performs certain action like drive. The characteristics of an Object are called as Property, in Object-Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript almost every element is an Object whether it is a function, array, and string. 

2. **Classes** – Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class or the concrete implementation. 
Before we move further into implementation, we should know unlike other Object Oriented Language there is no classes in JavaScript we have only Object. To be more precise, JavaScript is a prototype based object oriented language, which means it doesn’t have classes rather it define behaviors using constructor function and then reuse it using the prototype. 

3. **Encapsulation** – The process of wrapping property and function within a single unit is known as encapsulation. Sometimes encapsulation refers to hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but their are no such access modifiers in JavaScript but their are certain way by which we can restrict the scope of variable within the Class/Object

4. **Inheritance** – It is a concept in which some property and methods of an Object is being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Object inherits Object i.e. certain features (property and methods)of one object can be reused by other Objects.

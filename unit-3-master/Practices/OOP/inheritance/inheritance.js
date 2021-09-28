//Inheritance is one of the basic features of OOP and is used to create new data structures based on old ones. Let's show it on an example. We'll create a common Human class and assign name and age properties to it. We'll also add a greet() method:

class Human {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `My name is ${this.name} and I'm ${this.age}.`;
    }
}
//this code shouldn't surprise you

//Extending the class
//Let's say we can do it with this class for a while. But what if we need people who have some extra features? E.g. a programmer is also a person with a name, age, and the ability to greet, but he should have an extra property for the programming language he uses.

//A Naive Soulution
//It may cross your mind to create a Programmer class, copy the code from the Human class there, and just add the language property and, for example, a program() method

class Programmer {

    constructor(name, age, language) {
        this.name = name;
        this.age = age;
        this.language = language;
    }

    greet() {
        return `My name is ${this.name} and I'm ${this.age}.`;
    }

    program() {
        return `I'm programming in ${this.language}...`;
    }

}

//While this solution is functional, it violates one of the most fundamental good practices of all programmers - the DRY principle (Don't Repeat Yourself). Imagine that in the future you will decide to edit the Human class and forget that it's copied to several other files as well. Such errors are then hard to find, and of course, your application will become broken. So this is definitely not the way we're going to extend our classes 

//Solution using inheritance
//We'll actually create the new Programmer class, but we'll inherit it from the Human class. In JavaScript, we use the extends keyword in the definition of the new class to inherit it from another.

//e.g.class Child extends Parent

//Inheritance and Constructors

//But there's a small catch. Once we need a constructor in the child class, we must first call the parent's constructor by the super() function and pass it the necessary parameters if needed. We must call the parent constructor before using the this keyword. That makes sense since the constructor prepares the object for use, and if the parent has a constructor, the child should call it in its constructor to initialize everything. We must call the parent constructor in the child's constructor even if the parent didn't have its own constructor defined (even in this case it actually would have a constructor which is generated automatically for all objects if the custom one isn't provided).

class Programmer extends Human {

    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }

    program() {
        return `I'm programming in ${this.language}...`;
    }
}

//As we can see, we have a three-parameter constructor here. The name and age parameters are passed by super() to the constructor of the Human class. Then, we can see the language property, which we create here in the programmer's constructor and assign the value to it from the parameter of the same name. The Programmer class has three properties now: name, age, and language, and two methods, the inherited greet() method and program().

//Now we'll create a Programmer class instance in the main script and try to call both methods:
const programmer = new Programmer("Victor", 23, "JS");
document.write(`
${programmer.greet()}<br>
${programmer.program()}<br>
`);

//Benefits of Inheritance
//The advantages of using inheritance are clear. We don't have to copy the same properties to two classes. All we have to do is declare new ones. The rest will be inherited. The benefits are tremendous, we can extend existing components of new methods and reuse them. We don't have to write lots of redundant code, and most importantly - when we change a single property in the parent class, this change is then inherited everywhere automatically. We don't need to change something manually in 20 classes, which could potentially cause errors. We're humans and we'll always make mistakes, we have to choose the right programming techniques to make as less mistakes as possible.
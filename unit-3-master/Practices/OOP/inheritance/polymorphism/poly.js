//Polymorphism -- THIS IS PAIRED(AN EXTENTION OF..)/WITH INHERITANCE EXAMPLE
//Don't be scared of the obscure name of this technique, it's actually very simple. Polymorphism allows us to use a unified interface to work with objects of different types. Imagine that we have, for example, many objects representing geometric shapes (circles, squares, triangles, and so on). It'd certainly be helpful if we could communicate with them in some unified way even though they're different. We can create a GeometricShape class containing a color property and a render() method. All the geometric shapes would then inherit the interface from this class. Now you may be thinking, "But the circle and square object would render differently!." Well, polymorphism allows us to override the render() method in every subclass so it will do what we want. The interface will be unified and we won't have to think about which method to call to render different objects.

//Polymorphism is often explained using animals. All having a speak() method in their interface, but each animal performs it differently.


//Overriding the method
//Now let's apply the polymorphism by modifying the greet() method of the ancestor in the Programmer class. Overriding methods in JavaScript is simple - we just redefine them. So let's teach the programmer to greet in some geek way, such as using the greeting "Hello world!":

class Human {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `My name is ${this.name} and I'm ${this.age}.`;
    }
}

class Programmer extends Human {

    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }

    program() {
        return `I'm programming in ${this.language}...`;
    }

    greet() {
        return `Hello world! My name is ${this.name} and I'm ${this.age}.`;
    }
}

//If you call the greet() method on a Human instance, it'll print the original greeting text. You can try it :) So we got the same interface and different functionality which is chosen according to the particular object.

//Improvements
//Note that we used the basic greeting from the Human class, we just added "Hello world!" to it. Our solution above is not ideal, since for more types of people we'd always have to copy the same default greeting to the new class and add the new text before it. And we already know that according to DRY, any copying of the same code is wrong.

//The basic greeting can be returned by the greet() method of the Human class, and we can call it from the children as well as we called the Human class constructor - by the super() keyword. Then we'll just simply add the new text to it and return the result:

class Programmer extends Human {

    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }

    program() {
        return `I'm programming in ${this.language}...`;
    }

    greet() {
        return `Hello world! ${super.greet()}`;
    }
}

//Let's try to create a Human instance in the main script and call the greet() method on it to see the difference:

const programmer = new Programmer("Victor", 23, "JS");
document.write(`
${programmer.greet()}<br>
${programmer.program()}<br>
`);

const human = new Human("Mark", 26);
document.write(human.greet());
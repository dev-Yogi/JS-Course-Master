var employee = {
    name: "vanessa kasun",
};
console.log(employee.name); //vanessa kasun

employee.name = "alex maggiono";

console.log(employee.name)

//Everything looks fine in this example. We created the object, printed its attribute value and modified it. But the problem seems to arise when some user tries to set an integer value to the name attribute.

//As far as JavaScript is concerned this is completely legal as in JavaScript a variable can accept any type given to it. In order to rectify this, we need to set the range of valid characters that can be set to the attribute name of the object. These Validations can’t work if the caller can access and modify the value of these data. The simple solution for this would be


var employee = {
    name: "Vanessa Kasun",
    setName: function(value) {
        //The RegExp object is used for matching text with a pattern.
        // In a regular expression, it matches a digit (0-9) which includes the standard decimal digits 0-9 as well as the decimal digits of a number of other character sets.

        var exp = new RegExp(/\d+/);
        if (exp.test(value)) { //The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
            alert("Invalid Name");
        } else {
            this.name = value;
        }
    },
    "getName": function() {
        return this.name;
    }
};
alert(employee.getName()); // vanessa kasun
employee.setName("Alex Maggioni");
alert(employee.getName()); // Alex Maggioni
employee.setName(42); // Invalid Name
alert(employee.getName()); // Alex Maggioni 

// example applies the validation but still has some faults as if the caller access the name directly, he can still change it.
//employee.setName( 42 ); // Invalid Name; Here name won’t be changed.
//employee.name = 42;     // No validation happens and the name is changed
//alert( employee.getName() );   // 42 is printed.

//The end goal over here is that the variable name should not be available globally with the object “employee”. Encapsulation helps it out. This can be solved by the concepts Function Scope and Closures.

//function scope: Any Variable which is written inside the code block of the functions remains hidden from outside.

//Hence if we move the variable “name” inside the function “setName” then the callers won’t be able to access it directly. But this is not easy to directly put the variable “name” inside the function “setName” as the variable inside a function block can’t be used outside its scope, hence name would not be available for “getName” method. For this Closure will help.


//closure: When two functions are bundled together with references to their surrounding state or the lexical environment is known as a closure. In simple words, closure gives access to a local variable of a function to be used by another function inside a parent function. Here we have a variable name hiding inside the function setName from the outside world. But the inner object (myObj), can access it:

var employee = function() {
    var name = "Vanessa Kasun";
    var exp = new RegExp(/\d+/);
    var myObj = {
        setName: function(value) {
            if (exp.test(value)) {
                alert("invalid name");
            } else {
                name = value; // The object has access to "name"
            }
        },
        getName: function() {
            return name; // The object has access to "name"
        }
    }; // End of the Object
};
employee.getName(); // doesn't work!

//Now we have used the concept of closure, the inner object myObj can be accessed by both the functions. But still, there is a fault to access the inner object. Above we have seen employee.getName can’t be used, neither employee.myObj.getName can be used since myObj is also private to the function and private variables can’t be accessed outside like this. Hence we need to return the inner object whenever the anonymous function is called and assign it to an outside variable.

var employee = function() {
    var name = "Vanessa Kasun";
    var exp = new RegExp(/\d+/);
    return {
        setName: function(value) {
            if (exp.test(value)) {
                alert("Invalid Name");
            } else {
                name = value;
            }
        },
        getName: function() {
            return name;
        }
    }; // end of the return
}(); // Note this '()' means we're calling the function and assigning the returned value to the variable employee
alert(employee.getName()); // Vanessa Kasun
employee.setName("Alex Maggioni");
alert(employee.getName()); // Alex Maggioni
employee.setName(42); // Invalid Name; the name does'nt changes.
employee.name = 42; // Doesn't affect the private fullName variable.
alert(employee.getName()); // Alex Maggioni is printed again.
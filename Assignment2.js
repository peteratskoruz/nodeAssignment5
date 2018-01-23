// Creating Person constructor
function Person() {
    this.type = "Person";
    this.displayType = function() {
        return "Type is  " + this.type;
    };
}

// Creating person object
var person = new Person();

// Creating Student constructor
function Student() {}

// Inheriting person properties to Student by setting it's property to person object
Student.prototype = person;
Student.prototype.constructor = Student;

// Creating student object
var student = new Student();

// type : Person
alert("Before changing student type property: " + student.displayType());
console.log("Before changing student type property: " + student.displayType());

// Changing type property to Student
student.type = "Student";

// type: Student
alert("After changing student type property: " + student.displayType());
console.log("After changing student type property: " + student.displayType());
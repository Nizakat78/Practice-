"use strict";
// this is all use in array
Object.defineProperty(exports, "__esModule", { value: true });
let Name = ["Ahmed", "Ali", "Hassan"];
let Age = [23, 45, 67];
let married = [true, false, true];
// now this is object type
let personDetails = [{
        Name: 'Ahmed',
        Age: 23,
        Married: true
    },
    { Name: 'Ali',
        Age: 45,
        Married: false },
    { Name: "Hassan",
        Age: 67,
        Married: true }];
let ar = ["Hello", 1, true];
Age.push(68);
Age.push(0);
Name.forEach(Ahmed => console.log(`Name ${Ahmed}, Age: ${Ahmed}?`));
Age.forEach(Ahmed => console.log(`Age: ${Ahmed}?`));
married.forEach(value => console.log(`Are you Married${value}`));

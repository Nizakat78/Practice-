var b = 10, c = 50;
if (!(b > c)) {
    console.log("".concat(b, " is greater then ").concat(c)); // this is executed  because the condition in if statement becomes false
    console.log("".concat(c, " is greate then ").concat(b));
}
else if (b == c) {
    console.log("".concat(c, "  is equal is  ").concat(b));
}
else {
    console.log("".concat(b, " is less then ").concat(c));
}

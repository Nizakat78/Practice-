/* let b: number = 10 , c = 50

if(!(b > c)){
    console.log(`${b} is greater then ${c}`) // this is executed  because the condition in if statement becomes false
    console.log(`${c} is greate then ${b}`)
}
else if(b == c){
    console.log(`${c}  is equal is  ${b}`)
}
else{
    console.log(`${b} is less then ${c}`)
} */

let nam1 : string = "4577", nam2  : string = "6790"

if(nam1>nam2){
    console.log(` Hello ${nam1}`)  // nam1 is greater then name 2 this is not executed 
}
else  if (nam1==nam2){
    console.log(`Hello ${nam2}`) //  nam1 is equal to name2 it is not executed 
}
 else{
    console.log(`Both are Same`)  // this is Executed  because the first two conditions were false so it came
}
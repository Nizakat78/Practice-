let b: number = 10 , c = 50

if(!(b > c)){
    console.log(`${b} is greater then ${c}`) // this is executed  because the condition in if statement becomes false
    console.log(`${c} is greate then ${b}`)
}
else if(b == c){
    console.log(`${c}  is equal is  ${b}`)
}
else{
    console.log(`${b} is less then ${c}`)
}
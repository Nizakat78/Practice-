// this is all use in array

let Name :string[] =["Ahmed", "Ali","Hassan"];
let Age :number[]= [23,45,67];
let married :boolean[]=[true,false,true]

// now this is object type

let personDetails:object[] =[{
    Name : 'Ahmed',
    Age :23,
    Married :true
},
{ Name :'Ali',
Age :45,
Married: false},
{Name : "Hassan",
Age :67,
Married : true}]

let ar:any[]=["Hello",1,true]

Age.push(68)
Age.push(0)

Name.forEach(Ahmed =>console.log(`Name ${Ahmed}, Age: ${Ahmed}?`))
Age.forEach(Ahmed=> console.log(`Age: ${Ahmed}?`))
married.forEach(value => console.log(`Are you Married${value}`))

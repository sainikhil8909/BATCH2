let users = ["abc" , "def" , "ghi"];


// users.map((user ,i)=>{
//     console.log(user , i);

// })

// let x =users.map((user ,i)=>{
//     return user;
// });
// console.log(x);

// let x = users.forEach((user,i)=>{
//     // console.log(user);
//     return user;
// });

let userData ={
    name:"Sathvik",
    age:25,
    city:"Karimnagar"
};
console.log(userData.name , typeof(userdata));

let x = JSON.stringify(userData);
console.log(x , typeof(x));
let y = JSON.parse(x);
console.log(y);



let users = ["abc" , "def" , "ghi"];


// users.map((user ,i)=>{
//     console.log(user , i);

// })

// let x =users.map((user ,i)=>{
//     return user;
// });
// console.log(x);

let x = users.forEach((user,i)=>{
    // console.log(user);
    return user;
});
console.log(x);

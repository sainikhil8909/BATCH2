// // let p1 = new Promise((resolve , reject)=>{});
// // console.log(p1);
// // let p2 = new Promise((resolve , reject)=>){
// //     resolve("Success");

// // });
// // console.log(p2);
// // p2.then((res)=>{
// //     console.log(res);
// // }).catch(err=>console.log(err))
// // .finally(()=>console.log("final"))

// // let p3 = new Promise((resolve , reject)=>{
// //     reject("Failures");
// // });
// // p3
// // api fetching
// function fetchUsers(){
//     let response = fetch("https://jsonplaceholder.typicode.com/users");
//     //console.log(response);
//     response.then(res=>{
//         // console.log(res)
//         //console.log(res.json());
//         return res.json().then(data)=>{
//             console.log(data);
//         })
//     })
//     .catch(err=>console.log(err))

// }
// fetchUsers();

// let p = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("success")
//     },4000);
// });
// async function deo(){
//     console.log("start");
//     let x =await p;
//     console.log(x);
//     console.log("end");
// }
// demo();
  async function fetchUsers(){
    let response =await fetch("https://jsonplaceholder.typicode.com/users");
    let data =await response.json();
    console.log(data);
  }
  fetchUsers()

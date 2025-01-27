// let ele=document.getElementByClassName("test");
// let ele = document.getElementsByClassName("test")
// ele[0].style.backgroundColor="dodgerblue"
// console.log(ele);
// console.log(Array.isArray(ele));

//spread operator: this operator is used to take out each and every value from original array and store it in one more new array
//syntax of spread operator - [...variable]


// let x=[...ele]
// console.log(x, Array.isArray(x));
// x.map(element=>{
//     element.style.backgroundColor="tomato";
//     element.style.color="white";
//     element.style.textTransform="uppercase";
// });

// let ele = document.querySelector("#demo");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

let bgColor = document.querySelectorAll(".bgColor");
// console.log(bgColor);
[...bgColor].map(elemet=>{
    //console.log(element);
    element.addEventListener("mouseover",()=>{
        // console.log(element.innerText);
        element.style.backgroundColor = element.innerText;


    });
    element.addEventListener("mouseleave",()=>{
        //console.log(element.innerText);
        element.style.backgroundColor = "transperent";
    })
})
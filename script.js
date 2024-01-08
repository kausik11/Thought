let form  = document.querySelector("form");
let main = document.querySelector(".main");
let close = document.querySelector(".close");
let clearAll = document.querySelector(".danger");


form.addEventListener("submit",(e)=>{
    let name = e.target.UName.value;
    let phone = e.target.UPhone.value;
    let email = e.target.UEmail.value;
    let thought = e.target.Uthought.value;
    let CheckStatus = 0;

    const userData =JSON.parse(localStorage.getItem("userDetails")) ?? [];

    for(let v of userData){
        if(v.third == email || v.secound == phone) {
          CheckStatus = 1;
          break;
        }
    }

    if(CheckStatus == 1){
        alert("email or phone is already exist")
    }else{
        // console.log(userData);
    userData.push({
        'first': name,
        'secound': phone,
        'third':email,
        'fourth': thought
    })
    localStorage.setItem("userDetails", JSON.stringify(userData));
    //   console.log(userData)

    
     // console.log(e);
    // console.log(name,phone,email);
     e.preventDefault();
    e.target.reset();
    displayData();

    }
    
   
});

// let length = localStorage.getItem("userDetails").length;
// console.log(length)

const displayData = ()=>{
    const userData =JSON.parse(localStorage.getItem("userDetails")) ?? [];
    //  console.log(userData);
     let finalData = '';
     userData.forEach((element,index) => {
        
        finalData += `<div class="item">
        <span onclick='spliceData(${index})'>&times;</span>
        <h5>Name</h5>
        <div>${element.first}</div>
        <h5>Email</h5>
        <div>${element.third}</div>
        <h5>Phone</h5>
        <div>${element.secound}</div>
        <div><b>${element.fourth}</b></div>
    </div>`

    main.innerHTML = finalData;
     });

};
document.addEventListener("load",displayData());



// const arr = [2,4,10,5,8,9];
// console.log(arr);
// arr.splice(1,1);
// console.log(arr);



const spliceData = (index)=>{
    const userData =JSON.parse(localStorage.getItem("userDetails")) ?? [];
    // console.log(userData)
   userData.splice(index,1);
   localStorage.setItem("userDetails",JSON.stringify(userData));
   displayData();

//    userData.forEach(()=>{
//     displayData();
//    }) 

}



clearAll.addEventListener("click", ()=>{
    localStorage.clear("userDetails");
    displayData();
})



























// const cars = [
//     {
//       "color": "purple",
//       "type": "minivan",
//       "registration": new Date('2017-01-03'),
//       "capacity": 7
//     },
//     {
//       "color": "red",
//       "type": "station wagon",
//       "registration": new Date('2018-03-03'),
//       "capacity": 5
//     }
//   ]

//   //JSON.STRINGIFY to conver a obj into an json string
// // let a  = JSON.stringify(cars);
// // console.log(a);
// localStorage.setItem("value",JSON.stringify(cars));
// let result = localStorage.getItem("value");
// // console.log(result);// this is a string you can check it by typeof()
// //if you want to back the json string to array format we use JSON.PARSE
// console.log(JSON.parse(result));// it will show you an array object that the cars previously was
// // let final = JSON.parse(result);
// // console.log(final[0].color);


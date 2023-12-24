// const liveAlertBtns = document.querySelectorAll(".btn");
// const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

// Array.from(liveAlertBtns).forEach(liveAlertBtn => {
//     liveAlertBtn.addEventListener("click", e => {
//         const attribut = liveAlertBtn.classList[1].slice(4)
//         console.log( attribut)
//         container(`vous avez cliquez ${attribut}`, attribut)
//     })
// });

// const container = (message, type) => {
//     // const types = ["success", "danger", "info", "warning"];

//     const wrapper = document.createElement("div")
    
//     wrapper.innerHTML = 
//         `<div class='alert alert-${type} alert-dismissible w-50' role='alert'>
//             <div>${message}</div>
//             <button class='btn-close' type='button' data-bs-dismiss='alert' aria-label='alert'></button>
//         </div>
//         `

//     alertPlaceholder.append(wrapper)
// }



// // if (liveAlertBtn) {
// //     liveAlertBtn.addEventListener("click", () => {
// //         container("vous avez cliquez", "danger")
// //     })
// // }
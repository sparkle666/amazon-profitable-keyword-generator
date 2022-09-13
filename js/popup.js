
// // show dev
let checkBtn = document.getElementById("checkBtn")

checkBtn.addEventListener("click", ()=>{
    const val = document.querySelector("input.input").value
    document.getElementById("container").innerHTML = val
})

document.getElementById("theButton").addEventListener("click", () => {
window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
}, false);


// const getName = async() => {
//     const arr = []
// //    chrome.storage.sync.get("dev", ({dev})=>{
// //         arr.push(dev)
// //         console.log("inside", arr)
// //     })
// //     console.log("Outside Name:", arr[0])
// //     return arr
// const dev = await chrome.storage.sync.get("dev")
// console.log(dev.dev)
// }
// getName()


// function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//       document.body.style.backgroundColor = color;
//     });
//   }




document.addEventListener("DOMContentLoaded", function () {
let container = document.querySelector(".container")
let box = document.querySelectorAll(".box")
let player = document.querySelector(".winner")
let height = document.querySelector(".iswinner")
let boxes = document.querySelector(".boxes")
let resets = document.querySelector(".btn")
let newgame = document.querySelector(".newgame")
let resett = document.querySelector(".reset")

let p = true

const patterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    box.forEach((ele) => {
        ele.addEventListener("click",() =>{
        if (p == true) {
            ele.innerText = "X"
             p = false;
        } else {
            ele.innerText = "O"
            p = true
        }
        ele.disabled = true
        checkwinner()
    })
    });

    const disableboxes = ()=>{
        for (let ele of box) {
            ele.disabled = true
        }
    }

    const reset = ()=>{
        for (let ele of box) {
            ele.disabled = false
            ele.innerText = ""
        }
    }

    const enable = ()=>{
        p = true
        reset()
    }

     const checkwinner = (()=>{
        for (const pattern of patterns) {
            let val1 = box[pattern[0]].innerText
            let val3 = box[pattern[1]].innerText
            let val2 = box[pattern[2]].innerText

            if (val1 != "" && val2 != "" && val3 != "") {
                if (val1 == val2 && val2 == val3) {
                    val1 == "X" ? player.innerText = "Player 1 is the winner!!!" : player.innerText =   "Player 2 is the winner!!!"
                    height.style.height = "0px";
                    disableboxes()
                    boxes.innerHTML = ""
                    resets.innerHTML = ""
                    let newbtn = document.createElement("button")
                    newbtn.className = "newgame"
                    newbtn.id = "reloadButton"
                    newbtn.innerText = "New Game"
                    container.insertBefore(newbtn, document.querySelector(".head").nextSibling)
                    newbtn.addEventListener("click", function () {
                        location.reload();
                    });
                    
                    newgame.addEventListener("click", enable)
                }
            }
        }
    })
    
    resets.addEventListener("click", enable)

});

function rolldice() {
    
    let value = document.getElementById("value").value
    let  number = document.getElementById("number")
    let  img = document.getElementById("img")
    let values = []
    let images = []

    for (let i = 0; i < value; i++) {
        let result = Math.floor(1 + Math.random() * 6)
        values.push(result)
        images.push(`<img src="/Dice Roller/images/${result}.png">`)
    }
    number.textContent =`dice: ${values.join(", ")}`
    img.innerHTML = images.join("")
}
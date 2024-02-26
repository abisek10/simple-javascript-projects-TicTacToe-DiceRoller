
let r = Math.floor(1 + Math.random() *100)
let running = true
let attempts = 0

while (running) {
    
    let g = prompt("Guess the Number from 1 to 100")
    g = Number(g)

    if (isNaN(g)) {  
        alert("Enter the valid number")
    } else if(g > 100 || g < 1){
        alert("Guess the number from 1 to 100")
    }
    else{
        attempts ++;
        if (g < r) {
            alert("Too Low! Try Again!")
        } 
        else if(g > r){
            alert("Too High! Try Again!")
        } 
        else{
            alert(`Correct! You guessed it right. The answer was ${r} it took you ${attempts}attemps to complete.`);
            running = false
        }
    }
}


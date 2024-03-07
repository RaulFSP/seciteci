function alterar (){
    
    let red = document.querySelector("input#red")
    let green = document.querySelector("input#green")
    let blue = document.querySelector("input#blue")
    let valorRed = document.querySelector("span#valorRed")
    let valorGreen = document.querySelector("span#valorGreen")
    let valorBlue = document.querySelector("span#valorBlue")
    valorRed.textContent = red.value
    valorGreen.textContent = green.value
    valorBlue.textContent = blue.value
    document.querySelector("section#cor").style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`

    if(red.value < 127 || green.value < 127 || blue.value < 127){
        let legenda = document.querySelector("p#legenda").style.color = "white"
    } else {
        let legenda = document.querySelector("p#legenda").style.color = "black"
    }
    
}

alterar()
function adicionar (){
    let tabela = document.querySelector("tbody#tabelaCorpo")
    let nome = document.querySelector("input#nome")
    let idade = document.querySelector("input#idade")
    let cargo = document.querySelector("input#cargo")
    let linha = document.createElement("tr")
    let celulaNome = document.createElement("td")
    let celulaIdade= document.createElement("td")
    let celulaCargo= document.createElement("td")
    celulaNome.textContent = nome.value
    celulaIdade.textContent = idade.value
    celulaCargo.textContent = cargo.value
    linha.appendChild(celulaNome)
    linha.appendChild(celulaIdade)
    linha.appendChild(celulaCargo)
    tabela.appendChild(linha)
    
}




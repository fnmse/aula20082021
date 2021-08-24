var ListaDePecas = [" filtro do ar", "motor", "amortecedor"]

if(ListaDePecas.length < 2) {
    // é possível cadastrar peças
    console.log(" É possível cadastrar mais peças.")
}else {
    console.log ("Não tem mais espaço nessa lista, impossível cadastrar")
}

let peso = 50;

if (peso <100) {
    console.log (" A peça deve pesar no minimo 100g")
} else {
    console.log (" A peça possui peso adequado")
}

let nomePeca = ""

if (nomePeca.length >3) {
    console.log("Nome de peça está adequado para o cadastro")
}else if(nomePeca.length == 0) {
    console.log (" O nome da peça não pode serr vazio")
}else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
    
}

switch(nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio.")
        break
    case 1:
    case 2:
    case 3:
        console.log (" O nome deve ter mais de 3 caracteres, digite um nome adequado!")
    default:
        console.log("O nome da peça está adequado para cadastro")
        break
}
let loop = " "

function reverseString(string) {
    let newString = ""
    
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

function p(){
    const question = prompt('Digite a string que deseja inverter')
    const result = reverseString(question)
    alert(`A string ${question} invertida corresponde a: \n-${result}`)
}

p()
do {
    loop =prompt('Deseja continuar? \n1-Sim \n2-Não')
switch (loop) {
    case "1":
       p()
        break
    case "2":
        alert('Encerrando...')
        break
    default:
        alert('Opção inválida')
        break
    }        
} while(loop!=="2");

alert("Sequência de Fibonacci \n0, 1, 1, 2, 3, 5, 8, 13, 21, 34...");
let loop = " "

function fibonacci(){
    let firstNumber = 0
    let secondNumber = 1
    const fibonacci = []

    for (let index = 0; index < 50; index++) {
        fibonacci.push(firstNumber)
        let sum = firstNumber+secondNumber
        firstNumber = secondNumber
        secondNumber = sum
    }
    
    const question = prompt('Qual número você deseja pesquisar dentro da sequência de Fibonacci?')
    const search =parseInt(question)
    if(fibonacci.includes(search,0)){
    alert("Parabéns! Esse número existe dentro da Sequência de Fibonacci");
    }else{
    alert("Esse não número existe dentro da Sequência de Fibonacci");
    }
}

fibonacci()

do {
loop =prompt('Deseja continuar? \n1-Sim \n2-Não')
switch (loop) {
    case "1":
        fibonacci()
        break
    case "2":
        alert('Encerrando...')
        break
    default:
        alert('Opção inválida')
        break
    }        
} while(loop!=="2");


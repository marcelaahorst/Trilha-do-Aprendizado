var nome, idade, cpf

nome=prompt("Insira seu nome: ")
idade=parseFloat(prompt("Insira sua idade: "))

alert("Bem vindo "+nome+"! Você tem "+idade+" anos.")

if(idade>=18){
    cpf=prompt("Insira seu CPF: ")
    alert("Seu número de CPF é: "+cpf)
}
else{
    alert("Voce é menor de idade, seu crybaby!!! 😭😭😭")
}



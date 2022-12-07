/*Fazer um programa que exiba se um valor é maior que outro*/ 

var num1, num2

num1=parseFloat(prompt("Insira um número: "))
num2=parseFloat(prompt("Insira outro número: "))

if(num1>num2){
    alert(num1+" é maior que "+num2)
}

else if(num1<num2){
    alert(num1+" é menor que "+num2)
}

else{
    alert(num1+" é igual a "+num2)
}


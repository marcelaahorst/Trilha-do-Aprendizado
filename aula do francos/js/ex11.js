var num, cont, tabuada

num=parseInt(prompt("Digite o número da tabuada desejada: "))

cont=0
while(cont<11){
    tabuada=num*cont
    document.write(+num+" * "+cont+" = "+tabuada+ "<br>")
    cont++
}
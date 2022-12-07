var nome, n1, n2, soma, sub, div, mult

nome=prompt("Qual o seu nome?")

n1=parseFloat(prompt(nome+", digite um valor: "))
n2=parseFloat(prompt(nome+", digite outro valor: "))

soma=n1+n2
sub=n1-n2
mult=n1*n2
div=n1/n2

alert(nome+", o resultado da soma é "+soma)
document.write("<h2>"+nome+", o resultado da soma é "+soma+"</h2>")

alert(nome+", o resultado da subtração é "+sub)
document.write("<h2>"+nome+", o resultado da subtração é "+sub+"</h2>")

alert(nome+", o resultado é "+mult)
document.write("<h2>"+nome+", o resultado da multiplicação é "+mult+"</h2>")

if(n2==0){
    alert("Não existe divisão por zero, seu imbecil burro!!!! 🤣😂🤣🤣")
    document.write("<h2>"+"Não existe divisão por zero, seu imbecil burro!!!! 🤣😂🤣🤣"+"</h2>")
}

else{
    alert(nome+", o resultado é "+div)
    document.write("<h2>"+nome+", o resultado da divisão é "+div+"</h2>")
}


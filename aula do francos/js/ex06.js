var num

num=parseFloat(prompt("Digite um número: "))

if(num%3==0 && num%7==0){
    alert("O número inserido é divisível por 3 E divisível por 7")
}

if(num%3==0 && num%7!=0){
    alert("O número inserido é divisível SOMENTE por 3")
}

if(num%3!=0 && num%7==0){
    alert("O número inserido é divisível SOMENTE por 7")
}

if(num%3!=0 && num%7!=0){
    alert("O número inserido NAO é divisível nem por 7, nem por 3")
}


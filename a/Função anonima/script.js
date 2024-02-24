function adicao(num1, num2, funcao){
    let soma = num1 + num2;
    funcao(soma);
  }
  
  adicao(2, 2, (sum)=>{
    console.log("O resultado final é: " + sum); 
  });  
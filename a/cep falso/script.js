let endereco = localStorage.getItem("endereco")

if (endereco == null) {
    pegarEndereco();
}else{
    let atulizado = prompt("Endereço já informado na base de dados, deseja atulizar S/N")
    if(atulizado == "S"){
    pegarEndereco();
 }else{
 alert("Excução finalizada")
 }
}


let cep = prompt("Digite seu CEP:");

fetch(`https://viacep.com.br/ws/${cep}/json`, {method: 'GET'})
.then((restornofetch)=>{
    return restornofetch.json();
}).then((retornoAPI)=>{
    alert(`${retornoAPI.logradouro}, ${retornoAPI.complemento} - ${retornoAPI.bairro} - ${retornoAPI.localidade}/${retornoAPI.uf}`);

    let resposta = prompt("Os dados estão corretos?");

    if(resposta.toLowerCase() === "sim"){
        localStorage.setItem("endereco", JSON.stringify(retornoAPI));
    }
});
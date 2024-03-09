function getUserInfo() {
    return new Promise((resolve, reject) => {
        let nome = prompt("Digite seu nome:");
        let idade = prompt("Digite sua idade:");
        let email = prompt("Digite seu email:");

        let user = {
            Nome: nome,
            Idade: idade,
            email: email
        };

        localStorage.setItem("user", JSON.stringify(user));

        resolve();
    });
}
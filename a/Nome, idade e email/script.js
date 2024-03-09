function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                Nome: 'Artur',
                Idade: 18,
                email: 'an6281745@gmail.com'
            };
            resolve(user);
        }, 10000);
    });
}

function playGetUser() {
    let retorno = getUserInfo();
    retorno
        .then((obj) => {
            console.log(obj);
        })
        .catch((error) => {
            console.error(error);
        });
}

playGetUser();
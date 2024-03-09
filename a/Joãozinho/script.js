fetch("./data.json")
.then((resposta_obj) => {
    return resposta_obj.json();
})
.then((resposta__json) => {
    console.log(resposta__json)
})
.catch((error)=> crossOriginIsolated.log(error))
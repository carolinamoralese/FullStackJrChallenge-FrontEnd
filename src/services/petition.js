export function petitionAnime(){
    const baseUrl = "http://localhost:8080/api/v1/anime";

    return fetch(baseUrl)
    .then((response) => {
        if(!response.ok){
            throw new Error("Ocurrió un error: " + response.statusText)
        }
        return response.json()
    })
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        console.error("Error al realizar la solicitud:", error)
        throw Error
    })
}
export async function servicioSpotify(){

    const URI="https://api.spotify.com/v1/artists/7FhkwcO8Jd7BRWdllBpXBJ/top-tracks?market=US"

    const TOKEN="Bearer BQDER7TQkqDkVUw4o-vHXCAeoQmD_UXfyrYGI9xS32SyP_YMFbDtDu49DYzBnfO9mJ40yCXiYsvayTLTYfcYowQqX4Fq16L5fa-VcWt2ud6-SJotMZ16POB3-YkZQ1QNuNBBmirFld1-bBLgFxi4uT94sIl9y2gz9VaOpODfwIeOlPovVKoYi1AenmIHtLyTyWs"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos


}
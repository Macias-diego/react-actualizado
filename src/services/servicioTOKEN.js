export  async function servicioTOKEN(){

    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=67d4652cfa3843188175d3abf5c1a392"
    const DATO3="client_id=9ad280bebf3c4d8ba9e53f36045a28f7"


    //peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3

    }

    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token

    return datos 


}
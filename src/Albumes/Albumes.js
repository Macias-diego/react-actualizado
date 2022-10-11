import { servicioSpotify } from "../services/servicioSpotify.js"
import { useState} from 'react'

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    servicioSpotify()
    .then(function(respuesta){
        console.log(respuesta)
        setCanciones(respuesta.tracks)
    })
    console.log(canciones)
    
    

    return(

        <>
            <h1>Hola soy albumes y soy un componente</h1>
        </>
    )
}
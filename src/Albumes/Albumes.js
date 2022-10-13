import { servicioSpotify } from "../services/servicioSpotify.js"
import { servicioTOKEN } from "../services/servicioTOKEN.js"
import { useState, useEffect } from 'react'

export function Albumes (){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    //useStates para la carga de datos 
    const[carga,setCarga]=useState(true)

    //Usanso el useEffect
    useEffect(function(){
        servicioSpotify()
    .then(function(respuesta){
        console.log(respuesta)
        setCanciones(respuesta.tracks)
        setCarga(false)
    })
    console.log(canciones)

    },[])

    if(carga==true){
        return(
            <>
                <h1>Loading........</h1>            
            </>
        )

    }else{
        return(

            <>
            <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center mt-5">

                {
                    canciones.map(function (cancion) {
                        return (
                            <>
                                <div className="col mt-5">
                                    <div className="card h-100 align-content center border-5 border-dark">
                                        <img src={cancion.album.images[0].url} className="img-fluid w-100 h-100 p-1" alt="foto"></img>
                                        <h1 className="text-center text-danger fs-3 mt-2">{cancion.name}</h1>
                                        <h1 className="text center fs-3 text-info text-center">{cancion.popularity}</h1>
                                        <audio controls src={cancion.preview_url}></audio>
                                        

                                    </div>
                                </div>
                            </>
                        )

                    })
                }

            </div>

           
            
        </>
        )

    }




    
    
    

    
}
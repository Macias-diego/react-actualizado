import { Carrusel } from '../Carrusel.js/Carrusel.js'
import './Historia.css'
import { Integrantes } from '../Integrantes/Integrantes.js'
export function Historia(){

    return(
        <>
            <Carrusel></Carrusel>
            <div className='container'>
            <Integrantes></Integrantes>
            </div>
        </>
    )
}
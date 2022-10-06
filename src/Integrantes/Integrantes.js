import './Integrantes.css';
import 'animate.css';
import WOW from 'wowjs';
import { useEffect, useInsertionEffect } from 'react';



export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return (
        <>
            <div className="row my-5 justify-content-center">

                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/vocal_rotting.jpg?alt=media&token=4e04e2ee-87db-49bc-839d-ea4b03940e35" alt="foto rotting" className="img-fluid w-100 rounded-circle animate__animated animate__slideInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start'>
                    <h1>Saki Tolis</h1>
                    <h3>Lead guitar & Vocals</h3>
                </div>


            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body animate__slideInRight">
                         <b>Athanasios "Sakis" Tolis</b>He is a Greek musician best known as the vocalist and rhythm guitarist for Rotting Christ. It is also known as Necromayhem. He has recently produced some of the band's albums and has contributed as a session keyboard player.
                        </div>
                    </div>
                </div>
            </div>


            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end'>
                    <h1>Themis Tolis</h1>
                    <h3>Drummer</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/batero_rotting.jpg?alt=media&token=680c34f6-eaaa-416f-852f-fd496c94a1e3" alt="foto rotting" className="img-fluid w-100 rounded-circle animate__animated animate__slideInRight wow " data-bs-toggle="collapse" data-bs-target="#collapseExample1" />
                </div>



            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div class="collapse" id="collapseExample1">
                        <div class="card card-body animate__slideInRight">
                        <b>Themis Tolis</b>Drummer and co-founder of Rotting Christ, Themis has been taking care of the percussion in this legendary band during almost all of the band's history.

                        </div>
                    </div>
                </div>
            </div>



            <div className="row my-5 justify-content-center">

                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/bass-rotting.png?alt=media&token=42012cdd-4d3a-4dd7-8d70-1f666f7329c1" alt="foto rotting" className="img-fluid w-100 rounded-circle animate__animated animate__slideInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start'>
                    <h1>Jim "Mutilator"</h1>
                    <h3>Bassist</h3>
                </div>


            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body animate__slideInRight">
                         <b>Jim "Mutilator"</b>The year 1996 marks the departure of bassist Jim "Mutilator", from that date the band goes through a period in which members of the band enter and leave, the Tolis brothers and bassist Andreas remaining as a stable and compositional base.
                        </div>
                    </div>
                </div>
            </div>


            

            
            
        </>
    );
}

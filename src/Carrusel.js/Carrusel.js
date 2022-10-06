export function Carrusel() {

    return (
        <>
            <div className="container mt-5">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/rottingchrist_group.jpg?alt=media&token=7763e9e6-2c32-4a73-bf84-dadba6e8939f" height="700" className="w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/rotting_completa_carrusel.webp?alt=media&token=57669f92-bb1b-41e3-af86-3a9e5356e659" className="w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/Rotting-Live.jpg?alt=media&token=f7497e34-c0b8-4c9e-9190-c746ca950ef1" className="w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            </div>
            
            
        </>
    )
}
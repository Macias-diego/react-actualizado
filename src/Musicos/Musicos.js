import { Footer } from "../Footer/Footer"

export function Musicos() {

    // un arreglo de objetos es formato comun al consumir un api
    let musicos = [
        {
            nombre: "Saki Tolis",
            rol: "Lead guitar & Vocals",
            url: "https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/vocal.jpg?alt=media&token=49bc080f-96a7-45e8-9ffb-a5e0d139f099",
        },
        {
            nombre: "Themis Tolis",
            rol: "Drummer",
            url: "https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/drummer.jpg?alt=media&token=7f4c5c6e-4df7-4078-a5af-9b859eaca063",
        },
        {
            nombre: "Jim Mutilator",
            rol: "Bassist",
            url: "https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/bassist.jpg?alt=media&token=426b023c-50b4-496e-a2ca-677839453e7b",
        }
    ]

    let conciertosMemorables = [

        {
            fecha: "Marzo 1993",
            pais: "Grecia",
            descripcion: "The Coronation Of The Serpent 1993: Para cuando salió este tema, prácticamente nadie había sabido sacar ese sonido, esas melodías y ese enfoque artístico tan particular de Rotting Christ y, en definitiva, del metal helénico. En cuanto a la calidad de la pista, ahora deja bastante que desear, pero los ritmos rápidos y las guitarras sin tregua la hacen irresistible. También hay la aportación de Morbid a los sintetizadores, cosa que pasó de caracterizar a la banda a suprimirse por completo en los años venideros.",
            url: "https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/concert1.jpg?alt=media&token=46f25c96-c937-43bd-9c9d-db9add8e7251",
        },
        {
            fecha: "Agosto 1994",
            pais: "UK",
            descripcion: "Non Serviam, 1994: La tercera canción del álbum homónimo. Clásico de clásicos. Forma parte del segundo LP de la banda donde plasmaron en él, y más concretamente en esta canción, su espíritu y su esencia. Cogiendo el título como estandarte de ahora en adelante, los hermanos Tolis, en aquellos momentos llamados Necromayhem y Sauron respectivamente, se han posicionado siempre en contra de lo que representan las religiones. Ese rechazo hacia la iglesia marcará definitivamente el resto de su obra. Por lo que se refiere a la canción, ni la producción es espectacular ni el corte en sí una maravilla, pero consigue embrujar al oyente. Gran parte de su encanto se resume a su actitud.",
            url: "https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/concert2.jpg?alt=media&token=502593c1-fb4d-474f-b140-7f6634378602",
        },
        {
            fecha: "julio 1996",
            pais: "Grecia",
            descripcion: "Triarchy Of The Lost Lovers, 1996:Se puede apreciar que el vocalista no está en plena forma, y es que ahora sabemos que grabó este temazo -y el resto del disco- con el sarampión. ¡Cosas así ya no pasan! Lenta y melódica, sin blastbeats ni riffs de infarto, pero consistente y emotiva. “Snowing Still” es un tema espectacular que conforma la totalidad del fantástico Triarchy Of The Lost Lovers.",
            url: "https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/concert3.jpg?alt=media&token=5c6a1ba6-a2c5-45fc-84ac-9a2b47f77a3e",
        },
        {
            fecha: "Diciembre 2004",
            pais: "Belgica",
            descripcion: "Sanctus Diavolos, 2004: Tema que alza el vuelo en un santiamén. Cambia cuando entra la voz, y lo que lo convierte en algo especial es ese toque tradicional, casi folklórico, que hay en sus ritmos. Un ejemplo más de que Rotting Christ mantiene muy presentes sus raíces en su música. En ningún momento se pierde la melodía a la guitarra, un punteo agudo que une el tema de cabo a rabo.",
            url: "https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/concert4.jpg?alt=media&token=0909c069-7360-4951-9cd2-bc35f68ba1f8",
        },
        {
            fecha: "enero 2013",
            pais: "Rusia",
            descripcion: "Κατά τον δαίμονα εαυτού, 2013: Del también llamado Katá Ton Daímona Eaytoy. Es una canción rápida y agresiva que hace referencia a la civilización maya, saliendo así un poco de su temática predilecta. A una velocidad de infarto, los seis minutos de canción pasan volando. Es totalmente imposible pasarla por alto y menos no tenerla en cuenta para esta recopilación. ",
            url: "https://firebasestorage.googleapis.com/v0/b/tiandasuradamb.appspot.com/o/concert5.jpg?alt=media&token=a4280a27-2483-41a1-90d1-6ec6dbbbd295",
        }

    ]


    //Mapeando un arreglo para hacer render
    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center mt-5">

                {
                    musicos.map(function (musico) {
                        return (
                            <>
                                <div className="col mt-3">
                                    <div className="card h-100 bg-secondary">
                                        <img src={musico.url}
                                            className="img-fluid w-100 h-100" alt="foto"></img>
                                        <h1 className="text-center">{musico.nombre}</h1>
                                        <h2 className="text-center">{musico.rol}</h2>

                                    </div>
                                </div>
                            </>
                        )

                    })
                }

            </div>

            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center mt-5">

                {
                    conciertosMemorables.map(function (conciertoMemorable) {
                        return (
                            <>
                                <div className="col mt-3">
                                    <div className="card h-100 bg-secondary">
                                        <img src={conciertoMemorable.url}
                                            className="img-fluid w-100 h-100" alt="foto"></img>
                                        <h1 className="text-center">{conciertoMemorable.fecha}</h1>
                                        <h2 className="text-center">{conciertoMemorable.pais}</h2>
                                        <h2 className="text-center">{conciertoMemorable.descripcion}</h2>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
            <div>
                <Footer></Footer>
            </div>

        </>


    )



}
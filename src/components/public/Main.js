import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import '../css/main.css'
import '../../tipografias/arrows/iconos.css'

import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'




const Main = () => {
    const { theme, handleTheme } = useContext(ThemeContext);

    const [pokemones, setPokemones] = useState([]);
    const [anterior, setAnterior] = useState(null);
    const [siguiente, setSiguiente] = useState(null);
    const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(actual);
            const data = await response.json();
            // console.log(data);
            setPokemones(data.results);
            setAnterior(data.previous);
            setSiguiente(data.next);
            setIsLoading(false)
            // console.log(pokemones);
        }
        fetchData();
    }, [actual])


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <main class={theme}>
            {/* <section class="py-5 text-center container"> */}
            <section class={`py-5 text-center container `}>
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Album Pokemones</h1>
                        <h3 >pokemones del {pokemones[0].url.split('/')[6]} al {pokemones[pokemones.length-1].url.split('/')[6]} de  pokemones encontrados</h3>
                        {/* <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p> */}
                        <div>
                            {/* <a href="#" >Main call to action</a>
                            <a href="#" class="btn btn-secondary my-2">Secondary action</a> */}
                            <button class="btn btn-79 btn-primary btn1 my-2" onClick={() => anterior !== null && setActual(anterior)}>
                                <i class="icon-keyboard_arrow_left icono"></i>
                                
                            </button>
                            <button class="btn  btn-primary btn2 btn-secundary my-2" onClick={() => siguiente !== null && setActual(siguiente)}> 
                                <i class='icon-keyboard_arrow_right icono'></i>
                            </button>
                            {/* <button class="btn btn-primary my-2" onClick={() => {
                                if (anterior !== null) {
                                    setCont((prevCont) => prevCont - 20);
                                    setActual(anterior);
                                }
                            }}>Anterior</button>
                            <button class="btn btn-primary my-2" onClick={() => {
                                if (siguiente !== null) {
                                    setCont((prevCont) => prevCont + 20);
                                    setActual(siguiente);
                                }
                            }}>Siguiente</button> */}
                        </div>
                    </div>
                </div>
                
            </section>

            <div class={`album py-5 bg-body-tertiary`}>


                <Cards pokemones={pokemones} />

            </div>

        </main>
    )
}

export default Main

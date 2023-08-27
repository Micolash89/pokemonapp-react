import { Link } from 'react-router-dom';
import '../css/card.css'
import React, { useEffect, useState } from 'react'


import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'




const Card = ({ pokemon }) => {
    
    const { theme, handleTheme } = useContext(ThemeContext);
    const [poke, setPoke] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        async function fetchData() {
            await fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                    setPoke(data)
                    setIsLoading(false)
                    // console.log(data)
                });
        };
        fetchData();

    }, [pokemon]);

    if (isLoading) {
        return <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>;
    }

    return (
        <div class="col card1" >
            <div class="card shadow-sm">
                <img class={`img ${theme}`} src={poke.sprites.front_default} alt='foto' ></img>
                {/* <img src={poke.sprites.other['official-artwork'].front_default} alt="logo" /> */}
                {/* <img class='img' src={poke.sprites.other.dream_world.front_default} alt="logo" /> */}

                <div class="card-body">
                    <h2 class="card-title">{poke.name}</h2>
                    <p class="card-text"> This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group ">
                            <button type="button" class="btn  btn-primary">
                            <Link to={`/home/${poke.id}`} className="nav-link px-2 text- ">Detalle</Link></button>
                            {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                        </div>
                        <small class="text-body-secondary">{poke.id}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

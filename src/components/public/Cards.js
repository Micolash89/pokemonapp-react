import React from 'react'
import Card from './Card'
import '../css/cards.css'
const Cards = ({ pokemones }) => {

    // const [poke, setPoke] = useState();

    // useEffect(async () => {

    //     async function 
    //         fetchData();

    //     pokemon.forEach(e => {
    //         console.log(e);
    //          fetchData(e.url);
    //     })
    //     console.log(pokemones);
    // }, [pokemon])

    // });

    //     const cardsList = pokemones.map(pokemon => {

    //     <Card pokemon={pokemon} key={pokemon.id}/>
    // });
    const cardsList = pokemones.map( (pokemon) =>
        <Card pokemon={pokemon} key={pokemon.id} />
        
    );
    // console.log(pokemones);
    // const cardsList = pokemones.map(async (e,index) =>{

        
    //         const response = await fetch(e.url);
    //         const data = await response.json();
           
        
    //     console.log(index);
    //     return <Card pokemon={data} key={index} />
    // }
    // );

    return (
        <div class="container ">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 album">
                {cardsList}
              
            </div>
        </div>
    )
}

export default Cards

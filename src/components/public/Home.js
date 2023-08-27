import React from 'react'
import { useParams, Link } from 'react-router-dom';

const Home = () => {

    
    const {id} = useParams(); 


    return (
        <div>
            <h1>{id}</h1>

            <div class="card" style={{width: "18rem"}}>
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

            </div>

            <div class="card" >
                <div class="card-header">
                    Featured
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
            </div>

            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                            <Link to={`/`} className="nav-link px-2 text-secondary">Album</Link></button>
                            {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home

import '../css/header.css'
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


const Header = () => {

    const { theme, handleTheme } = useContext(ThemeContext);

    return (
        <div class=  {`container ${theme}`}>
                <div class="text-center py-1 my-1">
                    <input type="radio" name='theme' id='ligth' value="ligth" onChange={handleTheme}/>
                    <label htmlFor="ligth" class="mx-1">Claro</label>
                    <input type="radio" name='theme' id='dark' value="dark" onChange={handleTheme}/>
                    <label htmlFor="dark" class="mx-1">Oscuro</label>
                </div>
            <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header

import React from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'




const Footer = () => {
    const { theme, handleTheme } = useContext(ThemeContext);
    return (
        <div class={`container ${theme}`}>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer

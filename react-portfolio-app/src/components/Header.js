import React from 'react';
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange }) {
    return (
        <header class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid m-4">
                <div class="px-4">
                    <a href="#home" 
                    onClick={() => handlePageChange('AboutMe')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                    >
                        <h1>Justin Collver</h1>
                    </a>
                </div>
                
                < Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

            </div>
        </header>);
}

export default Header;
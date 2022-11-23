import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="d-flex align-items-center">
                    <ul className="nav" >
                        <li className="nav-item" class="px-4">
                            <a href="#aboutme"
                            onClick={() => handlePageChange('AboutMe')}
                            // Check to see if the currentPage is `AboutMe`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                            >
                                <h2>About Me</h2>
                            </a>
                        </li>
                        <li className="nav-item" class="px-4">
                            <a href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                <h2>Portfolio</h2>
                            </a>
                        </li>
                        <li className="nav-item" class="px-4">
                            <a href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                <h2>Resume</h2>
                            </a>
                        </li>
                        <li className="nav-item" class="px-4">
                            <a href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                <h2>Contact</h2>
                            </a>
                        </li>
                    </ul>
                </div>
    </nav>
  );
}

export default Navigation;
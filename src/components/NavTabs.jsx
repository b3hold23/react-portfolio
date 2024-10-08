import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <a className="navbar-brand" href="#">Angel Fernandez</a>
            <ul className="nav nav-tabs ml-auto">
                <li className="nav-item">
                    <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
                </li>

                <li className="nav-item">
                    <a href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a> 
                </li>

                <li className="nav-item">
                    <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                </li>

                <li className="nav-item">
                    <a href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTabs;
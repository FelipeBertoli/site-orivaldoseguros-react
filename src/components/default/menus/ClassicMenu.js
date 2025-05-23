import React, { useRef } from 'react';
import './style.css';
import { IconButton, Logo } from '../../ComponentsModule';
import NavLink from '../links/NavLink';

/**
 * Props do Componente
 * @param {boolean} showProfile: exibe o perfil do usuário no final do componente - false, true (default)
 * @param {boolean} sidebarOpen: condição de exibição do componente passada pelo componente pai (HybridHeader) - false (default), true
 */
export default function ClassicMenu({ showProfile = false, sidebarOpen }) {
    const sidebarRef = useRef(null);

    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
            <div className="logo-details">
                {
                    sidebarOpen ? <Logo /> : <Logo width="50px" lightLogoPath={'/assets/logo-icon.png'} darkLogoPath={'/assets/logo-icon.png'} />
                }
            </div>

            <ul className="nav-list">
                {/* <li>
                    <i className='bx bx-search' onClick={toggleSidebar}></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li> */}
                <li><NavLink origin="menu" active /></li>
                <li><NavLink origin="menu" /></li>
                <li><NavLink origin="menu" /></li>
                <li><NavLink origin="menu" /></li>
                {showProfile &&
                    <li className="profile">
                        <div className="profile-content">
                            <img src="/assets/logo-icon.png" alt="profileImg" />
                            <div className="profile-details">
                                <span>Name</span>
                                <small>Job</small>
                            </div>
                        </div>
                    </li>
                }

            </ul>
        </div>
    );
}

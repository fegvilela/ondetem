import React from 'react';
import './styles.css';

import { FiMail } from 'react-icons/fi';

import logoImg from '../../assets/logo.jpeg';

const Header = () => (
    <header>
                <img src={logoImg} alt="Onde Tem" />
                

                {/* <Link className="button" to="contact">Entrar em contato</Link> */}

                <button onClick={() => {}} type="button">
                    <FiMail size={18} color="#fffef7" />
                </button>
    </header>
);

export default Header;
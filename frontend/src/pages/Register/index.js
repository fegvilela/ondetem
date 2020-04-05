import React from 'react';

import { FiMail } from 'react-icons/fi';

import logoImg from '../../assets/logo.jpeg';

import {Link} from 'react-router-dom';

import './styles.css';

export default function Register(){
    return(
        <div className="register-container">
            <header>
                <img src={logoImg} alt="Onde Tem" />
                

                {/* <Link className="button" to="contact">Entrar em contato</Link> */}

                <button onClick={() => {}} type="button">
                    <FiMail size={18} color="#fffef7" />
                </button>
            </header>

            <div className="content">
                <form>
                    <input 
                        placeholder="Nome" 
                    />

                    <input 
                        placeholder="Nome do Comércio" 
                    />

                    <input 
                        placeholder="Telefone" 
                    />

                    <input 
                        type="email" placeholder="Email" 
                    />

                    <select name="local" placeholder="Local">
                        <option value={null}>Local</option>
                        <option value ="brasilia">Brasília</option>
                        <option value ="guara">Guará</option>
                        <option value ="aguas-claras" disabled>Águas Claras</option>
                        <option value ="taguatinga">Taguatinga</option>
                        <option value ="ceilandia">Ceilândia</option>
                    </select> 

                    <input 
                        placeholder="Endereço" 
                    />

                    <input 
                        placeholder="Cep" 
                    />

                    <input 
                        placeholder="Site" 
                    />

                    <textarea 
                        placeholder="Descrição do comércio" 
                    />

                </form>
            </div>
        </div>
    )
}
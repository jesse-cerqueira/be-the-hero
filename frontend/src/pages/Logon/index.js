import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import { FiLogIn } from 'react-icons/fi';

function Logon() {
  return (
    <div className="container-logon">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form action="">
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}

export default Logon;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

const Footer = () => {

  return (
    <footer className="bg-body-tertiary text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn btn-primary btn-floating m-1 ico-github" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3 fondo-gis texto-primario">
        © 2023 Copyright:<a href="/"> SEMÁFORO UV - SEXTO - GRUPO A</a>
      </div>
    </footer>
  );
};

export default Footer;
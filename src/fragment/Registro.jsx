import React from 'react';
import '../css/style.css';
import Footer from './Footer';
import BarraMenu from './BarraMenu';
import logo from '../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registro = () => (
  <div className="background-radial-gradient overflow-hidden">
    <header>
      <BarraMenu />
    </header>
    <section>
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-7 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-header">
                <span className="h1 fw-bold mb-4">Registro de usuarios</span>
              </div>

              <div className="card-body px-4 py-3">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={logo} alt="logo" className="w-100 " />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body">
                      <div className="container">
                        <form className="row g-3">
                          <div className="col-md-4">
                            <div className="form-outline">
                              <em className="far fa-user"></em>
                              <input type="text" className="form-control" placeholder="Nombres" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-outline">
                              <em className="far fa-user"></em>
                              <input type="email" className="form-control" placeholder="Apellidos" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-outline">
                              <em className="far fa-map"></em>
                              <input type="text" className="form-control" placeholder="Dirección" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-outline">
                              <em className="far fa-calendar"></em>
                              <input type="text" className="form-control" placeholder="Fecha Nacimiento" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-outline">
                              <em className="fa fa-phone"></em>
                              <input type="text" className="form-control" placeholder="Teléfono" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-outline">
                              <em className="fa fa-briefcase"></em>
                              <input type="text" className="form-control" placeholder="Cargo" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-outline">
                              <em className="far fa-building"></em>
                              <input type="text" className="form-control" placeholder="Institución" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-outline">
                              <em className="far fa-envelope"></em>
                              <input type="text" className="form-control" placeholder="Correo" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-outline">
                              <em className="fas fa-key"></em>
                              <input type="password" className="form-control" placeholder="Clave" />
                            </div>
                          </div>
                          <div className="col-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Registrarme</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
              Registrar Usuarios<br />

            </h1>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Registro;

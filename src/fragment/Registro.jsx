import React from 'react';
import '../css/style.css';
import Footer from './Footer';
import BarraMenu from './BarraMenu';
import logo from '../logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

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
              <div class="card-header">
                <span className="h1 fw-bold mb-4">SEMÁFORO UV</span>
              </div>

              <div className="card-body px-4 py-3">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={logo} alt="logo" className="w-100 " />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body">
                      <form>
                      <div className='mb-4'>
                          <div className={`input-field form-outline `}>
                          <em className="far fa-user"></em>
                            <input type= "text"  placeholder="Nombre" />
                          </div>
                          {/* {errors.clave && errors.clave.type === 'required' && <div className='alert alert-danger'>Ingrese una clave</div>} */}
                        </div>

                        <div className=' mb-4'>
                          <div className={`input-field form-outline `}>
                            <em className="far fa-user"></em>
                            <input type="email" id="form2Example17" placeholder="Ingrese correo" />
                          </div>
                          {/* {errors.correo && errors.correo.type === 'required' && <div className='alert alert-danger'>Ingrese el correo</div>}
        {errors.correo && errors.correo.type === 'pattern' && <div className='alert alert-danger'>Ingrese un correo valido</div>} */}

                        </div>
                        <div className='mb-4'>
                          <div className={`input-field form-outline `}>
                            <em class="fas fa-lock "></em>
                            <input type="password" id="typeText" placeholder="Ingrese clave" />
                          </div>
                          {/* {errors.clave && errors.clave.type === 'required' && <div className='alert alert-danger'>Ingrese una clave</div>} */}
                        </div>
                        <div className="mb-4">
                          <button className="boton btn btn-lg btn-block" type="submit">INICIAR</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
              Registro de usuarios<br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>Obtener acceso a la API!</span>
            </h1>
            {/* <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)', textAlign: "justify" }}>
              El acceso a la API exclusiva está disponible tras iniciar sesión, esta singular oferta proporciona datos específicos para potenciar proyectos,
              siendo el único servicio exclusivo actual. </p> */}
          </div>


        </div>
      </div>
    </section>
    <Footer />
  </div>

);

export default Registro;
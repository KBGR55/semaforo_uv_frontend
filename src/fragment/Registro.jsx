import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { LoginPost, PeticionGet } from '../hooks/Conexion';
import { getRol, getToken, saveRol, saveToken, saveUser } from '../utilidades/Sessionutil';
import { useNavigate } from 'react-router';
import mensajes from '../utilidades/Mensajes';
import logo from '../logo.png';
import Footer from './Footer';
import BarraMenu from './BarraMenu';
import '../css/style.css';

const Registro = () => {
  const navegation = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    var datos = {
      "nombres": data.nombres,
      "clave": data.clave
    };
    /*
    LoginPost(datos,'cuenta/sesion').then((info) => {  
        if (info.code !== 200) { 
            mensajes(info.msg, "error", "error");
        } else {
            saveToken(info.token);
            console.log("Token:" + getToken());
            console.log("Usuario: " + info.user);
            saveUser(info.user);
            saveRol(info.rol);
            navegation("/api");
            mensajes(info.msg);
        };
        });*/
  };

  const nombresValue = watch('nombres');
  const apellidosValue = watch('apellidos');
  const fecha_nacimientoValue = watch('fecha_nacimiento');
  const telefonoValue = watch('telefono');
  const direccionValue = watch('direccion');
  const cargoValue = watch('cargo');
  const institucionValue = watch('institucion');
  const correoValue = watch('correo');
  const claveValue = watch('clave');

  return (
    <div className="background-radial-gradient overflow-hidden">
      <header>
        <BarraMenu />
      </header>
      <section>
        <div className="container align-items-center text-center text-lg-start my-5">

          <div className="mb-lg-0">
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
                        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                          <div className="col-md-4">
                            <div className={`input-field form-outline ${nombresValue ? 'active' : ''}`} >
                              <em className="far fa-user"></em>
                              <input type="text" className="form-control" placeholder="Nombres" {...register('nombres', { required: true })} />
                            </div>
                            {errors.nombres && errors.nombres.type === 'required' && <div className='alert alert-danger'>Ingrese sus nombre</div>}
                            {errors.nombres && errors.nombres.type === 'pattern' && <div className='alert alert-danger'>Ingrese sus nombres</div>}
                          </div>
                          <div className="col-md-4">
                            <div className={`input-field form-outline ${apellidosValue ? 'active' : ''}`} >
                              <em className="far fa-user"></em>
                              <input type="email" className="form-control" placeholder="Apellidos" {...register('apellidos', { required: true })} />
                            </div>
                            {errors.apellidos && errors.apellidos.type === 'required' && <div className='alert alert-danger'>Ingrese sus apellidos</div>}
                            {errors.apellidos && errors.apellidos.type === 'pattern' && <div className='alert alert-danger'>Ingrese sus apellidos</div>}
                          </div>
                          <div className="col-md-4">
                            <div className={`input-field form-outline ${direccionValue ? 'active' : ''}`} >
                              <em className="far fa-map"></em>
                              <input type="text" className="form-control" placeholder="Dirección" {...register('direccion', { required: true })} />
                            </div>
                            {errors.direccion && errors.direccion.type === 'required' && <div className='alert alert-danger'>Ingrese su dirección</div>}
                            {errors.direccion && errors.direccion.type === 'pattern' && <div className='alert alert-danger'>Ingrese su dirección</div>}
                          </div>
                          <div className="col-md-4">
                            <div className={`input-field form-outline ${fecha_nacimientoValue ? 'active' : ''}`} >
                              <em className="far fa-calendar"></em>
                              <input type="text" className="form-control" placeholder="Fecha Nacimiento" {...register('fecha_nacimiento', { required: true })} />
                            </div>
                            {errors.fecha_nacimiento && errors.fecha_nacimiento.type === 'required' && <div className='alert alert-danger'>Ingrese su fecha de nacimiento</div>}
                            {errors.fecha_nacimiento && errors.fecha_nacimiento.type === 'pattern' && <div className='alert alert-danger'>Ingrese su fecha de nacimiento</div>}
                          </div>
                          <div className="col-md-4">
                            <div className={`input-field form-outline ${telefonoValue ? 'active' : ''}`} >
                              <em className="fa fa-phone"></em>
                              <input type="text" className="form-control" placeholder="Teléfono" {...register('telefono', { required: true })} />
                            </div>
                            {errors.telefono && errors.telefono.type === 'required' && <div className='alert alert-danger'>Ingrese su telefono</div>}
                            {errors.telefono && errors.telefono.type === 'pattern' && <div className='alert alert-danger'>Ingrese su telefono</div>}
                          </div>
                          <div className="col-md-4">
                            <div className={`input-field form-outline ${institucionValue ? 'active' : ''}`} >
                              <em className="far fa-building"></em>
                              <input type="text" className="form-control" placeholder="Institución" {...register('institucion', { required: true })} />
                            </div>
                            {errors.institucion && errors.institucion.type === 'required' && <div className='alert alert-danger'>Ingrese la institución</div>}
                            {errors.institucion && errors.institucion.type === 'pattern' && <div className='alert alert-danger'>Ingrese el cargo en la institución</div>}
                          </div>
                          <div className="col-md-4">
                            <div className={`input-field form-outline ${cargoValue ? 'active' : ''}`} >
                              <em className="fa fa-briefcase"></em>
                              <input type="text" className="form-control" placeholder="Cargo" {...register('cargo', { required: true })} />
                            </div>
                            {errors.cargo && errors.cargo.type === 'required' && <div className='alert alert-danger'>Ingrese su cargo en la institución</div>}
                            {errors.cargo && errors.cargo.type === 'pattern' && <div className='alert alert-danger'>Ingrese su cargo en la institución</div>}
                          </div>
                          <div className="col-md-4">
                            <div className={`input-field form-outline ${correoValue ? 'active' : ''}`} >
                              <em className="far fa-user"></em>
                              <input type="email"  className="form-control"  placeholder="Correo" {...register('correo', { required: true, pattern: /^\S+@\S+$/i })} />
                            </div>
                            {errors.correo && errors.correo.type === 'required' && <div className='alert alert-danger'>Ingrese el correo</div>}
                            {errors.correo && errors.correo.type === 'pattern' && <div className='alert alert-danger'>Ingrese un correo valido</div>}
                          </div>
                          <div className="col-md-4">
                            <div className={`input-field form-outline ${claveValue ? 'active' : ''}`}>
                              <em class="fas fa-lock "></em>
                              <input type="password"  className="form-control" placeholder="Clave" {...register('clave', { required: true })} />
                            </div>
                            {errors.clave && errors.clave.type === 'required' && <div className='alert alert-danger'>Ingrese una clave</div>}
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

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Registro;

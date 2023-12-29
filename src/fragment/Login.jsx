import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { InicioSesion } from '../hooks/Conexion';
import { getToken, saveRol, saveToken, saveUser } from '../utilidades/Sessionutil';
import { useNavigate } from 'react-router';
import mensajes from '../utilidades/Mensajes';
import logo from '../logo.png';
import Footer from './Footer';
import BarraMenu from './BarraMenu';
import '../css/style.css';

const Login = () => {
    const navegation = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {
        var datos = {
            "correo": data.correo,
            "clave": data.clave
        };

        InicioSesion(datos).then((info) => {
            var infoAux = info.info
            if (info.code !== 200) {
                mensajes(info.msg, "error", "error");
            } else {
                saveToken(infoAux.token);
                saveRol(infoAux.user.rol);
                console.log("lghjg" + infoAux.user.user);
                saveUser(infoAux.user.user);
                console.log("Token" + getToken());
                navegation("/api");
                mensajes(info.msg);
            }
        })
    };
    const correoValue = watch('correo');
    const claveValue = watch('clave');
    return (
        <div>
            <header>
                <BarraMenu />
            </header>
            <section className="background-radial-gradient overflow-hidden">
                <style>
                    {`
                   .background-radial-gradient {
                    background-color: hsl(218, 41%, 15%);
                    background-image: radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%),
                        radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%);
                }
                
                    `}
                </style>
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-7 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div class="card-header">
                                    <span className="h1 fw-bold mb-0">SEMÁFORO UV</span>
                                </div>

                                <div className="card-body px-4 py-5">
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block" style={{ textAlign: 'center', lineHeight: '100%' }}>
                                            <img src={logo} alt="logo" class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">

                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div>
                                                    <div className={`input-field form-outline mb-4 ${correoValue ? 'active' : ''}`} >
                                                        <em className="far fa-user" style={{ marginRight: '10px' }}></em>
                                                        <input type="email" id="form2Example17" placeholder="Ingrese correo" {...register('correo', { required: true, pattern: /^\S+@\S+$/i })} />
                                                        </div>
                                                        {errors.correo && errors.correo.type === 'required' && <div className='alert alert-danger'>Ingrese el correo</div>}
                                                        {errors.correo && errors.correo.type === 'pattern' && <div className='alert alert-danger'>Ingrese un correo valido</div>}
                                                  
                                                        </div> 
                                                    <div className={`input-field form-outline mb-4 ${claveValue ? 'active' : ''}`}>
                                                        <em class="fas fa-lock "></em>
                                                        <input type="password" id="typeText" placeholder="Ingrese clave" {...register('clave', { required: true })} />
                                                        {errors.clave && errors.clave.type === 'required' && <div className='alert alert-danger'>Ingrese una clave</div>}

                                                    </div>
                                                    <div className="pt-1 mb-4" style={{ textAlign: 'center' }}>
                                                        <button className="btn btn-dark btn-lg btn-block" type="submit" style={{ backgroundColor: '#212A3E', width: '100%' }}>INICIAR</button>
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
                            Iniciar sesión<br />
                                <span style={{ color: 'hsl(218, 81%, 75%)' }}>Obtener acceso a la API</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>

                    
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Login;
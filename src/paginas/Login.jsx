import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import dsiLogo from '../assets/images/Logodsi.jpg';
import Alerta from '../componentes/Alerta';
import clienteAxios from '../config/axios';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        if ([usuario, password].includes('')) {
            setAlerta({
                msg: 'Los campos son obligatorios',
                error: true
            })
            return;
        }
        setAlerta({});

        try {
            console.log(usuario);
            const {data} = await clienteAxios.post('/login', {usuario, password});
            setAlerta({msg: data.msg});
            navigate('/zonatex')
        } catch (error) {
            setAlerta({
                msg: 'Credenciales incorrectas. Por favor verifica tu nombre de usuario y contraseña.',
                error: true
            });
        }
    }

    const {msg} = alerta;

    return (
        <>
            <main className="container mx-auto flex flex-col justify-center items-center h-screen">
                <section className="flex flex-col justify-center items-center">
                    <img src={dsiLogo} className="w-52 h-20" alt="React logo" />
                    <div className="flex flex-col items-center bg-white bg-opacity-75 justify-center px-6 py-8 mx-auto lg:py-0">
                        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Acceso al Sistema
                                </h1>
                                {msg &&                                 
                                    <Alerta
                                        alerta={alerta}    
                                    />
                                }
                                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Usuario</label>
                                        <input type="text" name="usuario" value={usuario} onChange={e => setUsuario(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="usuario" required="" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                    </div>
                                    <input type="submit" value="Aceptar" className="w-full text-white bg-primary-600 hover:bg-primary-700 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login
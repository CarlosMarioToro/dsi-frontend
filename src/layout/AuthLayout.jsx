import { Outlet } from "react-router-dom";
import empresaLogo from '../assets/images/Logo.jpg'

const AuthLayout = () => {
    return (
        <>
            {/* <h1>Desde Auth Layout</h1> */}
            <main className="container w-full h-screen bg-center bg-contain" style={{backgroundImage: `url(${empresaLogo})`, backgroundRepeat: 'no-repeat'}}>
                <Outlet/>
            </main>
        </>
    )
}

export default AuthLayout
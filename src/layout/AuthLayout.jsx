import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
            <main className="container w-full h-screen bg-center bg-contain">
                <Outlet/>
            </main>
        </>
    )
}

export default AuthLayout
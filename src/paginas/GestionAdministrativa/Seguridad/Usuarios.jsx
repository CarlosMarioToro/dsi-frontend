import { DataGrid } from "@mui/x-data-grid";
import clienteAxios from '../../../config/axios';
import Alerta from "../../../componentes/Alerta";
import React, { useState } from "react";

const columns = [
    { field: "id", headerName: "Código", width: 80,headerClassName: 'super-app-theme--header',
    headerAlign: 'center' },
    { field: "col1", headerName: "Nombres", width: 150,headerClassName: 'super-app-theme--header',
    headerAlign: 'center' },
    { field: "col2", headerName: "Apellido", width: 150,headerClassName: 'super-app-theme--header',
    headerAlign: 'center' },
];

let rows = [];

const Usuarios = () => {
    const [alerta, setAlerta] = useState({});

    React.useEffect(() => {
        async function obtenerUsuarios() {
            const { data } = await clienteAxios.get("/usuarios");
            rows = [];
            for(var i in data) {
                let usuario = {
                    id: data[i].cod_usuario,
                    col1: data[i].nom_usuario,
                    col2: data[i].ape_usuario
                }
                rows = [...rows, usuario];
            }
            setAlerta({ msg: data.msg });
        }
        obtenerUsuarios();
    }, []);

    const { msg } = alerta;

    return (
        <>
            <section className="container w-full h-full items-center">
                <div className="flex flex-col items-center h-full w-auto bg-gray-300 rounded-lg p-4 bg-opacity-75">
                    <h1 className="w-full p-3 bg-gray-500 rounded-t-lg">Maestro de Usuarios</h1>
                    {msg && <Alerta alerta={alerta} />}
                    <div className="w-auto h-[calc(85vh-55px)] bg-white bg-opacity-75">
                        <DataGrid columns={columns} rows={rows} />
                    </div>                    
                </div>
            </section>
        </>
    );
};

export default Usuarios;

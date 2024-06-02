import { DataGrid } from "@mui/x-data-grid";
import clienteAxios from "../../../config/axios";
import Alerta from "../../../componentes/Alerta";
import React, { useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "Código",
    width: 80,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "col1",
    headerName: "Nombre",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "col2",
    headerName: "Cod Dian",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "col3",
    headerName: "Departamento",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
];

let rows = [];

const Ciudades = () => {
  const [alerta, setAlerta] = useState({});

  React.useEffect(() => {
    async function obtenerCiudades() {
      const { data } = await clienteAxios.get("/ciudades");
      rows = [];
      for (var i in data) {
        let ciudades = {
          id: data[i].ciu_codigo,
          col1: data[i].ciu_nombre,
          col2: data[i].ciu_cod_dian,
          col3: data[i].dpt_nombre,
        };
        rows = [...rows, ciudades];
      }
      setAlerta({ msg: data.msg });
    }
    obtenerCiudades();
  }, []);

  const { msg } = alerta;

  return (
    <>
      <section className="container w-full h-4/5 items-center">
        <div className="flex flex-col items-center h-full w-auto bg-gray-300 rounded-lg p-4 bg-opacity-75">
          <h1 className="w-full p-3 bg-gray-500 rounded-t-lg">
            Maestro de Ciudades
          </h1>
          {msg && <Alerta alerta={alerta} />}
          <div className="w-auto h-full bg-white bg-opacity-75">
            <DataGrid
              columns={columns}
              rows={rows}
              rowHeight={25}
              autoPageSize
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ciudades;

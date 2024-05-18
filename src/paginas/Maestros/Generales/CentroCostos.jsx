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
    headerName: "Cod Contable",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
];

let rows = [];

const CentroCostos = () => {
  const [alerta, setAlerta] = useState({});

  React.useEffect(() => {
    async function obtenerCentroCostos() {
      const { data } = await clienteAxios.get("/centro-costos");
      rows = [];
      for (var i in data) {
        let centroCostos = {
          id: data[i].ccc_codigo,
          col1: data[i].ccc_nombre,
          col2: data[i].ccc_cod_contable,
        };
        rows = [...rows, centroCostos];
      }
      setAlerta({ msg: data.msg });
    }
    obtenerCentroCostos();
  }, []);

  const { msg } = alerta;

  return (
    <>
      <section className="container w-full h-full items-center">
        <div className="flex flex-col items-center h-full w-auto bg-gray-300 rounded-lg p-4 bg-opacity-75">
          <h1 className="w-full p-3 bg-gray-500 rounded-t-lg">
            Maestro de Centro de Costos
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

export default CentroCostos;

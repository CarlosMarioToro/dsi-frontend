import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const rows = [
  { id: 1, col1: 'Hello', col2: 'World ' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const ParamImpuestos = () => {
    return (
        <>
            <section className="container w-full h-full items-center">
                <div className="flex flex-col items-center h-full w-auto bg-gray-300 rounded-lg p-4 bg-opacity-75">
                    <h1 className="w-full p-3 bg-gray-500 rounded-t-lg">Maestro de Impuestos</h1>
                    <div className="w-auto h-full bg-white bg-opacity-75">
                        <DataGrid columns={columns} rows={rows} />
                    </div>                    
                </div>                
            </section>
        </>
    );
};

export default ParamImpuestos;

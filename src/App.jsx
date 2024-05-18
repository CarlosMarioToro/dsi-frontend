import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './paginas/Login';
import Calculator from './paginas/Archivo/Calculator';
import CentroCostos from './paginas/Maestros/Generales/CentroCostos';
import Ciudades from './paginas/Maestros/Generales/Ciudades';
import Clientes from './paginas/Maestros/Generales/Clientes';
import Departamentos from './paginas/Maestros/Generales/Departamentos';
import EmpTransportadoras from './paginas/Maestros/Generales/EmpTransportadoras';
import Paises from './paginas/Maestros/Generales/Paises';
import Proveedores from './paginas/Maestros/Generales/Proveedores';
import Presupuesto from './paginas/Maestros/Generales/Presupuesto';
import Vendedoras from './paginas/Maestros/Generales/Vendedoras';
import Zonas from './paginas/Maestros/Generales/Zonas';
import Barrios from './paginas/Maestros/Generales/Barrios';
import Temporadas from './paginas/Maestros/Generales/Temporadas';
import Usuarios from './paginas/GestionAdministrativa/Seguridad/Usuarios';
import Bodegas from './paginas/Maestros/Insumos/Bodegas';
import GruposInventarios from './paginas/Maestros/Insumos/GruposInventarios';
import MaestroInsumos from './paginas/Maestros/Insumos/MaestroInsumos';
import SubGrupoInv from './paginas/Maestros/Insumos/SubGrupoInv';
import UnidadesMov from './paginas/Maestros/Insumos/UnidadesMov';
import GrupoGastos from './paginas/Maestros/Gastos/GrupoGastos';
import MaestroGastos from './paginas/Maestros/Gastos/MaestroGastos';
import SubgrupoGastos from './paginas/Maestros/Gastos/SubgrupoGastos';
import BancosTransacciones from './paginas/Maestros/Administrativos/BancosTransacciones';
import BancosProveedores from './paginas/Maestros/Administrativos/BancosProveedores';
import Cif from './paginas/Maestros/Administrativos/Cif';
import ComisionRecaudo from './paginas/Maestros/Administrativos/ComisionRecaudo';
import MaestroComprobantes from './paginas/Maestros/Administrativos/MaestrosComprobantes';
import MaestroConceptos from './paginas/Maestros/Administrativos/MaestroConceptos';
import ParamConsecutivos from './paginas/Maestros/Administrativos/ParamConsecutivos';
import ParamCompras from './paginas/Maestros/Administrativos/ParamCompras';
import ParamFacturacion from './paginas/Maestros/Administrativos/ParamFacturacion';
import ParamGrales from './paginas/Maestros/Administrativos/ParamGrales';
import ParamImpuestos from './paginas/Maestros/Administrativos/ParamImpuestos';
import Periodos from './paginas/Maestros/Administrativos/Periodos';
import AuditProcesos from './paginas/Maestros/Produccion/AuditProcesos';
import CapacidadTerceros from './paginas/Maestros/Produccion/CapacidaTerceros';
import CrearRefDiseno from './paginas/Maestros/Produccion/CrearRefDiseno';
import CrearRef from './paginas/Maestros/Produccion/CrearRef';
import Colores from './paginas/Maestros/Produccion/Colores';
import Coleccion from './paginas/Maestros/Produccion/Coleccion';
import Composicion from './paginas/Maestros/Produccion/Composicion';
import Festivos from './paginas/Maestros/Produccion/Festivos';
import Lineas from './paginas/Maestros/Produccion/Lineas';
import Moldes from './paginas/Maestros/Produccion/Moldes';
import OperacionesConfeccion from './paginas/Maestros/Produccion/OperacionesConfeccion';
import MaquinasConfeccion from './paginas/Maestros/Produccion/MaquinasConfeccion';
import Marcas from './paginas/Maestros/Produccion/Marcas';
import Prendas from './paginas/Maestros/Produccion/Prendas';
import Piezas from './paginas/Maestros/Produccion/Piezas';
import PartesPrendas from './paginas/Maestros/Produccion/PartesPrendas';
import PintasProd from './paginas/Maestros/Produccion/PintasProd';
import Procesos from './paginas/Maestros/Produccion/Procesos';
import Tallas from './paginas/Maestros/Produccion/Tallas';
import ImpCodBarr from './paginas/Maestros/Produccion/ImpCodBarr';
import InsumosLinea from './paginas/Maestros/Produccion/InsumosLinea';
import AnularNotaCredito from './paginas/Clientes/Anular/AnularNotaCredito';
import AnularReciboCaja from './paginas/Clientes/Anular/AnularReciboCaja';
import CrearListaEmpPedidos from './paginas/Clientes/DespachoListaEmpaque/CrearListaEmpPedidos';
import CerrarListaEmp from './paginas/Clientes/DespachoListaEmpaque/CerrarListaEmp';
import ReporteListaEmp from './paginas/Clientes/DespachoListaEmpaque/ReporteListaEmp';
import AnularRemisionCajas from './paginas/Clientes/DespachoListaEmpaque/AnularRemisionCajas';
import CodBarras from './paginas/Clientes/Devoluciones/CodBarras';
import Factura from './paginas/Clientes/Devoluciones/Factura';
import Referencia from './paginas/Clientes/Devoluciones/Referencia';
import FacturarInventarios from './paginas/Clientes/Facturar/FacturarInventarios';
import FacturarPedidos from './paginas/Clientes/Facturar/FacturarPedidos';
import FacturarRemisiones from './paginas/Clientes/Facturar/FacturarRemisiones';
import FacturarOtros from './paginas/Clientes/Facturar/FacturarOtros';
import FacturarCodBarras from './paginas/Clientes/Facturar/FacturarCodBarras';
import Vmi from './paginas/Clientes/Facturar/Vmi';
import Pdv from './paginas/Clientes/Facturar/Pdv';
import NotaCreditoClientes from './paginas/Clientes/NotaCreditoClientes';
import ReciboCajaClientes from './paginas/Clientes/ReciboCajaClientes';
import ModificarReciboCaja from './paginas/Clientes/ModificarReciboCaja';
import AplicarNotaCredito from './paginas/Clientes/AplicarNotaCredito';
import AplicarReciboCaja from './paginas/Clientes/AplicarReciboCaja';
import RemisionarPedidos from './paginas/Clientes/RemisionarPedidos';
import ModificarRemisionPedido from './paginas/Clientes/ModificarRemisionPedido';
import SepararPedidos from './paginas/Clientes/SepararPedidos';
import ModificarFactura from './paginas/Clientes/ModificarFactura';
import { AuthProvider } from './context/AuthProvider';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './paginas/Dashboard';

import './App.css';
import PuntosReorden from './paginas/Maestros/Produccion/PuntosReorden';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/'  element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
            </Route>

            <Route path='/zonatex' element={<AdminLayout />}>
              <Route index  element={<Dashboard />} />
              <Route path='archivo/calculadora' element={<Calculator/>}/>
              <Route path='maestros/generales/centro-costos' element={<CentroCostos/>}/>
              <Route path='maestros/generales/ciudades' element={<Ciudades/>}/>
              <Route path='maestros/generales/clientes' element={<Clientes/>}/>
              <Route path='maestros/generales/departamentos' element={<Departamentos/>}/>
              <Route path='maestros/generales/empresas-transportadoras' element={<EmpTransportadoras/>}/>
              <Route path='maestros/generales/paises' element={<Paises/>}/>
              <Route path='maestros/generales/proveedores' element={<Proveedores/>}/>
              <Route path='maestros/generales/presupuesto' element={<Presupuesto/>}/>
              <Route path='maestros/generales/vendedoras' element={<Vendedoras/>}/>
              <Route path='maestros/generales/zonas' element={<Zonas/>}/>
              <Route path='maestros/generales/barrios' element={<Barrios/>}/>
              <Route path='maestros/generales/temporadas' element={<Temporadas/>}/>
              <Route path='maestros/insumos/bodegas' element={<Bodegas/>}/>
              <Route path='maestros/insumos/gruposinventarios' element={<GruposInventarios/>}/>
              <Route path='maestros/insumos/maestroinsumos' element={<MaestroInsumos/>}/>
              <Route path='maestros/insumos/subgruposinventarios' element={<SubGrupoInv/>}/>
              <Route path='maestros/insumos/unidadesmovimiento' element={<UnidadesMov/>}/>
              <Route path='maestros/gastos/grupo' element={<GrupoGastos/>}/>
              <Route path='maestros/gastos/maestro' element={<MaestroGastos/>}/>
              <Route path='maestros/gastos/subgrupo' element={<SubgrupoGastos/>}/>
              <Route path='maestros/administrativos/bancostransacciones' element={<BancosTransacciones/>}/>
              <Route path='maestros/administrativos/bancosproveedores' element={<BancosProveedores/>}/>
              <Route path='maestros/administrativos/cif' element={<Cif/>}/>
              <Route path='maestros/administrativos/comisionrecaudo' element={<ComisionRecaudo/>}/>
              <Route path='maestros/administrativos/maestroscomprobantes' element={<MaestroComprobantes/>}/>
              <Route path='maestros/administrativos/maestrosconceptos' element={<MaestroConceptos/>}/>
              <Route path='maestros/administrativos/paramconsecutivos' element={<ParamConsecutivos/>}/>
              <Route path='maestros/administrativos/paramcompras' element={<ParamCompras/>}/>
              <Route path='maestros/administrativos/paramfacturacion' element={<ParamFacturacion/>}/>
              <Route path='maestros/administrativos/paramgrales' element={<ParamGrales/>}/>
              <Route path='maestros/administrativos/paramimpuestos' element={<ParamImpuestos/>}/>
              <Route path='maestros/administrativos/periodos' element={<Periodos/>}/>
              <Route path='maestros/produccion/auditoresprocesos' element={<AuditProcesos/>}/>
              <Route path='maestros/produccion/capacidadterceros' element={<CapacidadTerceros/>}/>
              <Route path='maestros/produccion/crearrefdiseno' element={<CrearRefDiseno/>}/>
              <Route path='maestros/produccion/crearref' element={<CrearRef/>}/>
              <Route path='maestros/produccion/colores' element={<Colores/>}/>
              <Route path='maestros/produccion/coleccion' element={<Coleccion/>}/>
              <Route path='maestros/produccion/composicion' element={<Composicion/>}/>
              <Route path='maestros/produccion/festivos' element={<Festivos/>}/>
              <Route path='maestros/produccion/lineas' element={<Lineas/>}/>
              <Route path='maestros/produccion/moldes' element={<Moldes/>}/>
              <Route path='maestros/produccion/marcas' element={<Marcas/>}/>
              <Route path='maestros/produccion/maquinasconfeccion' element={<MaquinasConfeccion/>}/>
              <Route path='maestros/produccion/operacionconfeccion' element={<OperacionesConfeccion/>}/>
              <Route path='maestros/produccion/prendas' element={<Prendas/>}/>
              <Route path='maestros/produccion/piezas' element={<Piezas/>}/>
              <Route path='maestros/produccion/partesprendas' element={<PartesPrendas/>}/>
              <Route path='maestros/produccion/pintasproduccion' element={<PintasProd/>}/>
              <Route path='maestros/produccion/procesos' element={<Procesos/>}/>
              <Route path='maestros/produccion/tallas' element={<Tallas/>}/>
              <Route path='maestros/produccion/imprimircodbarras' element={<ImpCodBarr/>}/>
              <Route path='maestros/produccion/insumoslinea' element={<InsumosLinea/>}/>
              <Route path='maestros/produccion/puntoreordenreferencias' element={<PuntosReorden/>}/>
              <Route path='clientes/anular/nota-credito' element={<AnularNotaCredito/>}/>
              <Route path='clientes/anular/reciboCaja' element={<AnularReciboCaja/>}/>
              <Route path='clientes/despacho/crear-lista-empaque' element={<CrearListaEmpPedidos/>}/>
              <Route path='clientes/despacho/cerrar-lista-empaque' element={<CerrarListaEmp/>}/>
              <Route path='clientes/despacho/reporte-lista-empaque' element={<ReporteListaEmp/>}/>
              <Route path='clientes/despacho/anular-remision-cajas' element={<AnularRemisionCajas/>}/>
              <Route path='clientes/devoluciones/factura' element={<Factura/>}/>
              <Route path='clientes/devoluciones/referencia' element={<Referencia/>}/>
              <Route path='clientes/devoluciones/cod-barras' element={<CodBarras/>}/>
              <Route path='clientes/facturar/inventarios' element={<FacturarInventarios/>}/>
              <Route path='clientes/facturar/pedidos' element={<FacturarPedidos/>}/>
              <Route path='clientes/facturar/remisiones' element={<FacturarRemisiones/>}/>
              <Route path='clientes/facturar/otros-conceptos' element={<FacturarOtros/>}/>
              <Route path='clientes/facturar/con-codbarras' element={<FacturarCodBarras/>}/>
              <Route path='clientes/facturar/vmi' element={<Vmi/>}/>
              <Route path='clientes/facturar/pdv' element={<Pdv/>}/>
              <Route path='clientes/nota-credito' element={<NotaCreditoClientes/>}/>
              <Route path='clientes/recibo-caja' element={<ReciboCajaClientes/>}/>
              <Route path='clientes/modificar-recibo-caja' element={<ModificarReciboCaja/>}/>
              <Route path='clientes/aplicar-nota-credito' element={<AplicarNotaCredito/>}/>
              <Route path='clientes/aplicar-recibo-caja' element={<AplicarReciboCaja/>}/>
              <Route path='clientes/remisionar-pedidos' element={<RemisionarPedidos/>}/>
              <Route path='clientes/modificar-remision-pedido' element={<ModificarRemisionPedido/>}/>
              <Route path='clientes/separar-pedidos' element={<SepararPedidos/>}/>
              <Route path='clientes/modificar-factura' element={<ModificarFactura/>}/>
              <Route path='gestion-administrativa/seguridad/usuarios' element={<Usuarios/>}/>
            </Route>
          </Routes>          
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
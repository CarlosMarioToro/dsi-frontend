import { useEffect, useState } from "react";
import logoDSI from '../assets/images/Logodsi.jpg'

const Cabecera = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const daysOfWeek = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const monthOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        const fecha = new Date();
    const [dataTime, setDataTime] = useState({
        nombreDia: daysOfWeek[fecha.getDay()],
        year: fecha.getFullYear(),
        month: monthOfYear[fecha.getMonth()],
        day: fecha.getDate(),
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundo: fecha.getSeconds()
    });
    
    useEffect(() => {
        const timer = setInterval(() => {
            const fecha = new Date();
            setDataTime({
                nombreDia: daysOfWeek[fecha.getDay()],
                year: fecha.getFullYear(),
                month: monthOfYear[fecha.getMonth()],
                day: fecha.getDate(),
                hora: fecha.getHours(),
                minuto: fecha.getMinutes(),
                segundo: fecha.getSeconds()
            });
        }, 500)
        return () => clearInterval(timer)
    }, [daysOfWeek, monthOfYear])
    
    return (
        <>
            <header className="flex h-16 bg-gray-400 mb-3 items-center justify-end">
                <div className=" flex p-2 h-11 border border-gray-800 bg-gray-100 justify-center">{dataTime.nombreDia}, {dataTime.day} de {dataTime.month} de {dataTime.year} {dataTime.hora < 10 ? ` 0${dataTime.hora}` : dataTime.hora}: {dataTime.minuto < 10 ? ` 0${dataTime.minuto}` : dataTime.minuto}: {dataTime.segundo < 10 ? ` 0${dataTime.segundo}` : dataTime.segundo}</div>
                <img src={logoDSI} alt="logoDSI" className="m-3 w-24 h-10" />
            </header>
        </>
    );
};

export default Cabecera;

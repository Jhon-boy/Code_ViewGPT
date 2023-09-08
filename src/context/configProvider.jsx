import { useState } from "react";
import { configContext } from "./configContext";

export const ConfigProvider = ({ children }) => {

    // basic atributes for all aplication
    const [lenguage, setLenguaje] = useState("java");
    const [descripcion, setDescripcion] = useState("Comparacion de fechas");
    const [codigo, setCodigo] = useState(`  const onClickLoadMore = () => {
        setOffset(offset + 50);

    }`);
    return (
        <configContext.Provider
            value={{
                lenguage,
                setLenguaje,
                descripcion,
                setDescripcion,
                codigo,
                setCodigo
            }}>
            {children}
        </configContext.Provider>
    )

}
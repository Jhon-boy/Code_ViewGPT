import { useState , useEffect} from "react";
import { configContext } from "./configContext";
import app from "../services/firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const auth = getAuth(app);
export const ConfigProvider = ({ children }) => {

    // basic atributes for all aplication
    const [lenguage, setLenguaje] = useState("java");
    const [descripcion, setDescripcion] = useState("Comparacion de fechas");
    const [codigo, setCodigo] = useState(`  const onClickLoadMore = () => {
        setOffset(offset + 50);

    }`);
    const [usuario, setUsuario] = useState(null);
    // const logeo = () =>{
    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUsuario(usuarioFirebase);
        } else {
            setUsuario('Anonimo');
        }
    });

    // }

    useEffect(() => {
        onAuthStateChanged(auth, (usuarioFirebase) => {
            if (usuarioFirebase) {
                setUsuario(usuarioFirebase);
            } else {
                setUsuario('Anonimo');
            }
        }
        );
    });


    return (
        <configContext.Provider
            value={{
                lenguage,
                setLenguaje,
                descripcion,
                setDescripcion,
                codigo,
                setCodigo,
                setUsuario,
                usuario
            }}>
            {children}
        </configContext.Provider>
    )

}
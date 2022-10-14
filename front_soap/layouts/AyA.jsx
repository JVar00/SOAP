import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
const AyA = () => {
    const {logOut} = useContext(AuthContext)
    return <div>Acomodo y Alisto(Private)
        <button onClick={logOut}>Salir</button>
    </div>;
};

export default AyA;

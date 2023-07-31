import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador(){
    const [numero, setNumero] = useState<number>(0)

    function incrementar(){
        setNumero(numero + 1)
    }

    function decrementar(){
        setNumero(numero -1)
    }

    return (
        <div className={`
        flex flex-col p-2 w-72 h-72
        border border-zinc-400 rounded-lg`}>
            <Display valor={numero}/>
            <Botoes inc={incrementar} dec={decrementar}/>
        </div>
    )
}


import Neto from "./Neto"

interface PropsFilho{
    nome: string
    sobrenome: string
}

export default function Filho(props: PropsFilho){
    return (
        <div className={`
        flex flex-col gap-5 p-5 rounded-md
        bg-blue-500 text-white border border-white
    `}>
            <div className="flex justify-center gap-2 text-xl">
                <span className="font-black">Pai</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>

            <div className="">
                <Neto nome="Pedro" sobrenome={props.sobrenome}/>
                <Neto nome="Cibelle" sobrenome={props.sobrenome}/>
                <Neto nome="Umbra" sobrenome={props.sobrenome}/>
            </div>

        </div>
    )
}
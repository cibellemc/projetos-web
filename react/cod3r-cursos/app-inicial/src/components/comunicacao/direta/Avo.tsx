import Filho from "./Filho"

interface PropsAvo{
    nome: string
    sobrenome: string
}

export default function Avo(props: PropsAvo){
    return (
        <div className={`
            flex flex-col gap-5 p-5 rounded-md
            bg-purple-500 text-white border border-white
        `}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black">Avô</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>

            <div className="flex gap-5">
                <Filho nome="Jorge" sobrenome={props.sobrenome}/>
                <Filho nome="Caio" sobrenome={props.sobrenome}/>
                <Filho nome="Paulo" sobrenome={props.sobrenome}/>
            </div>
        </div>
    )
}
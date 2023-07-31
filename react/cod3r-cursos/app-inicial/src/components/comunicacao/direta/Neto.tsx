interface PropsNeto{
    nome: string
    sobrenome: string
}

export default function Neto(props: PropsNeto){
    return (
        <div className={`
        flex p-5 rounded-md justify-center items-center
        bg-green-500 text-white border border-white
    `}>
            <div className="flex justify-center gap-2 text-xl">
                <span className="font-black">Neto</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div> 
        </div>
    )
}
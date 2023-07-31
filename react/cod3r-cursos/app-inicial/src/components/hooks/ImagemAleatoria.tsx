import Image from "next/image"
import { useState } from "react"

export default function ImagemAleaatoria(){

    const url = 'http://source.unsplash.com/featured/'    
    const [pesquisa, setPesquisa] = useState<string>('person')
    const [tamanho, setTamanho] = useState<number>(300)

    function renderizarBotao(valor: string){
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                setPesquisa(valor)
            }}>
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            
            <Image src={`${url}${tamanho}x${tamanho}?${pesquisa}`} width={300} height={300} alt="Imagem aleatória"/>

            <div className="flex justify-between gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>

            <input className="bg-zinc-800 p-2 rounded-md"
             type="number" 
             value={tamanho} 
             onChange={(e) => setTamanho(+e.target.value)}>
            </input>

        </div>
    )
}
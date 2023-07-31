import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaAvo(){
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10">Comunicação direta</h1>
            <Avo nome="Mario" sobrenome="Costa"/>
        </div>
    )
}
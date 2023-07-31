import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos(){
    return (
        <div className="flex justify-around items-center h-screen">
            <Circulo text="#1"/>
            <Circulo text="#2"/>
            <Circulo text="#3" quasePerfeito/>
        </div>
    )
}
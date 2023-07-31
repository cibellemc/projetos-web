import ImagemAleaatoria from "@/components/hooks/ImagemAleatoria";

export default function PaginaImagens(){
    return (
        <div className={`
            flex justify-center items-center h-screen gap-5
        `}>
            <ImagemAleaatoria />
            <ImagemAleaatoria />
            <ImagemAleaatoria />
        </div>
    )
}
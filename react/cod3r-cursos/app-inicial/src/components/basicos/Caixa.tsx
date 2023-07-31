export default function Caixa(props: any){
    return (
        <div className={`
            flex justify-center items-center
            bg-purple-500 p-2 rounded-md
            w-64 h-64 text-5xl font-bold
        `}>
            {props.children}
        </div>
    )
}
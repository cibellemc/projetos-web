* Tudo que colocar na pages vira uma url na aplicação
Ex: arquivo ghi.tsx dentro de pasta def dentro de pasta abc pode ser acessado com url "localhost:3000/abc/cde/ghi

* Dentro de pages só arquivos de páginas completas. Para parte de páginas, cria-se pasta "components" dentro de src/

* Comunicação direta de pai pra filho (dependência de cima para baixo)

* Pode usar className="" e escrever em uma só linha ou usar className={``} para múltiplas linhas

* Extensão Tailwind CSS Intellisense

* Se quiser um tamanho específico, pode usar []. Ex:
    <code>
        <div className={`
            bg-purple-500 p-2 rounded-md
            w-64 h-[300px]
        `}>
            Caixa
        </div>
    </code>

* flex flex-row: eixo priincipal é o da linha,
  flex flex-col: coluna

* o par de chaves acessa e executa javascript

* {props.children} capta o que foi colocado entre a div. Ex:
            <Caixa>name="Cibelle"</Caixa>

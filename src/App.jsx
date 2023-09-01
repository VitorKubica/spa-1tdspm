//Importando dependências e ou arquivos que vamos utilizar e ou referenciar.
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

export default function App() {
  return (
    <>
      <div className="container">
        {/* Isso é um comentário */}

        {/* Vamos criar uma cabeçalho com um header, um h1 com um título e uma lista ul com 3 item com link. */}
        <Cabecalho />
        {/* Vamos criar uma seção com uma div, com 3 <p></p> e estes <p></p> vão ter 3 linhas de lorem, abaixo dos <p></p> uma img. */}
      
            <Outlet/>

        <Rodape />
        {/* Vamos criar um rodapé com uma div, uma lista com 3 itens com links para redes sociais e abaixo um <p></p> com o texto e código do símbolo de direitos reservados. */}
      </div>
    </>
  );
}

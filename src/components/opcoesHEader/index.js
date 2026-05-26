import { Link } from "react-router-dom";
import styled from "styled-components";
const textoOpcoes = ["Categorias", "Estante", "Favoritos"];

// styles
const OpcoesHeaderUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const OpcoesHeaderA = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
`
// styles

function OpcaoHeader(){
    return(
        <OpcoesHeaderUl>
        {textoOpcoes.map((texto) => (
          
          <Link to={`/${texto.toLowerCase()}`}>
            <OpcoesHeaderA href="/">{texto}</OpcoesHeaderA>
          </Link>
        ))}
      </OpcoesHeaderUl>
    )
}
export default OpcaoHeader;
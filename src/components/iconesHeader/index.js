import perfil from "../../imgs/perfil.svg";
import sacola from "../../imgs/sacola.svg";
import styled from 'styled-components';

// styles
const Icone = styled.li`
    text-decoration: none;
    color: black;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`
// styles

const icones = [perfil, sacola];
function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="icones"></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
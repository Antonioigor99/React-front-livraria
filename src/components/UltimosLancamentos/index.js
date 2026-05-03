import { livros } from "./dadosUltimosLancametos";
import styled from "styled-components";
import {Titulo} from '../Titulo/index'
const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-botton: 20px;
  display: flex;
  flex-direction: column;

`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#Eb9b00" tamanhoFonte="36px">Últimos Lançamentos</Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
        <img src={livro.src} alt="Ultimos livros" />
      ))}
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  );
}
export default UltimosLancamentos;

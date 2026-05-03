import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadospesquisa";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
color: #fff;
font-size: 36px;
text-align: center;
width: 100%;
`;
const Subtilulo = styled.h3`
font-size: 16px;
font-weight: 500;
margin-botton: 40px;

`;
const LivroPesquisadoContainer = styled.section`
    margin: 0 auto;
    font-size:18px;
    font-weight:bold;
    color:#fff;
    display:flex;
    flex-wrap: wrap;
    width:100%;
    gap:40px;
    max-width: 1200px;
    justify-content:center;
    align-items:center;
`;
const LivroPesquisado = styled.div`
    cursor:pointer;
    border:2px solid transparent;
    padding:4px;
    &:hover{
    border-color: #fff;
    }
`
function Pesquisa (){
    const [livrosPesquisados, setlivrosPesquisados] = useState([]);
    console.log(livrosPesquisados);
    return(
        <PesquisaContainer>
            <Titulo>Ja sabe por onde começar?</Titulo>
            <Subtilulo>Encontre seu livro em nossa estante</Subtilulo>
            <Input placeholder="Escreva sua proxima Leitura" onBlur={evento => {
                const textoDigitado = evento.target.value;
                const resultado = livros.filter(livro => livro.nome.includes(textoDigitado));
                setlivrosPesquisados(resultado)
            }} />
            <LivroPesquisadoContainer>
            {livrosPesquisados.map(livro => (
                <LivroPesquisado>
                    <p>{livro.nome}</p>
                    <img alt="imagem do Livro" src={livro.src} />            
                </LivroPesquisado>
            ))}
            </LivroPesquisadoContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa;
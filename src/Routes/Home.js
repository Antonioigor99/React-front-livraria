/* eslint-disable jsx-a11y/alt-text */

import styled from "styled-components";
import Pesquisa from "../components/Pesquisa";
import UltimosLancamentos from "../components/UltimosLancamentos";
import CardRecomenda from "../components/CardRecomenda";
import imagemLivro from "../imgs/livro.png"
// styles
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x:hidden;
`;
// styles
function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
      <CardRecomenda
      titulo="Talvez voce se interesse por"
      subtitulo="Angular 11"
      descricao="Construindo uma aplicação com a plataforma google"
      img={imagemLivro}
       />
      <CardRecomenda
      titulo="Talvez voce se interesse por"
      subtitulo="Angular 11"
      descricao="Construindo uma aplicação com a plataforma google"
      img={imagemLivro}
       />
    </AppContainer>
  );
}
export default Home;

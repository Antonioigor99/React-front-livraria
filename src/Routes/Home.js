/* eslint-disable jsx-a11y/alt-text */

import styled from "styled-components";
import Pesquisa from "../components/Pesquisa";
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
    </AppContainer>
  );
}
export default Home;
